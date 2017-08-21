const express = require('express'),
    router = express.Router(),
    PdfDocument = require('pdfkit'),
    PdfTable = require('voilab-pdf-table'),
    fs = require('fs');


router.post('/order/:id', (req,res)=>{
    const table = {
        create: function () {
            // create a PDF from PDFKit, and a table from PDFTable
            let pdf = new PdfDocument({
                    autoFirstPage: false,
                }),
                table = new PdfTable(pdf, {
                    bottomMargin: 30
                });
            pdf.font('./server/orders/fonts/10673.ttf')
            table
            // add some plugins (here, a 'fit-to-width' for a column)
                .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
                    column: 'name'
                }))
                // set defaults to your columns
                .setColumnsDefaults({
                    headerBorder: 'B',
                    align: 'right'
                })
                // add table columns
                .addColumns([
                    {
                        id: 'id',
                        header: 'ID',
                        width:30,
                        align:'left'
                    },
                    {
                        id: 'name',
                        header: 'Name',
                        align:'left'
                    },
                    {
                        id: 'price',
                        header: 'Price',
                        width: 50
                    }
                ])
                // add events (here, we draw headers on each new page)
                .onPageAdded(function (tb) {
                    tb.addHeader();
                });

            // if no page already exists in your PDF, do not forget to add one
            pdf.addPage();

            let TotalPrice = 0;
            let items = [];
            req.body.Cart.forEach((item,index)=>{
                TotalPrice=TotalPrice+item.price;
                items.push({id:item.id, name:item.name, price:item.price})
            });

            //финальный вывод
            table.addBody(items);
            pdf.fontSize(18)
                .text('Общая стоймость: '+TotalPrice)
                .text('  ');
            pdf.fontSize(14)
                .text('ФИО покупателя: '+req.body.Info.name+' '+req.body.Info.surname)
                .text('Телефон: '+req.body.Info.phone)
                .text('Адрес: '+req.body.Info.address);

            return pdf;
        }
    };
    let pdf = table.create();
    pdf.pipe(fs.createWriteStream(`./server/orders/order${req.params['id']}.pdf`));
    pdf.end();
});


module.exports= router;
import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';

import { thunkItemsList, thunkSaveChanges, thunkDeleteItem, thunkAddItem } from '../side-effects/thunks';
import { selectItem, } from "../actions/actions";

const mapStateToProps = ({ItemsList,SelectedItem}) => ({ItemsList,
    SelectedItem,
    });

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
    selectItem: (Item) => dispatch(selectItem.select(Item)),
    changeName: (Name) => dispatch(selectItem.changeName(Name)),
    changePrice: (Price) => dispatch(selectItem.changePrice(Price)),
    changeCount: (Count) => dispatch(selectItem.changeCount(Count)),
    changeDescription: (Description) => dispatch(selectItem.changeDescription(Description)),
    saveChanges: (Item) => dispatch(thunkSaveChanges(Item)),
    deleteItem: (Id) => dispatch(thunkDeleteItem(Id)),
    addItem: (img,Item) => dispatch(thunkAddItem(img,Item))
});

class AdministrationPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getItemsList();
    }

    handleSubmit(values){
        let Item = {
            name: values.name,
            price: values.price,
            count: values.count,
            description: values.description
        };

        try{
            let formData= new FormData();
            let file=values.file[0];
            formData.append('img',file);
            formData.append('name',values.name);
            this.props.addItem(formData,Item);
        }catch(err){
            alert('Выбирите изображение!')
        }
    };

    render() {
        console.log('AdminPage',this.props);
        return(
        <div className="container">
            <div className="row">
                <div className="col-8">
            <table className="table table-bordered table-hover ">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Наименование</td>
                        <td>Цена</td>
                        <td>Шт.</td>
                    </tr>
                </thead>
                {
                    this.props.ItemsList.map(item=>{
                        return(
                            <tbody key = {item.id}>
                            <tr onClick={(e)=>this.props.selectItem(item)}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </table>
                </div>
                { this.props.SelectedItem.id ? (
                    <div className="col-4">
                        <p>ID: {this.props.SelectedItem.id}</p>
                        <span>Наименование </span><br/>
                        <input type="text"
                               value={this.props.SelectedItem.name}
                               onChange={(e)=> this.props.changeName(e.target.value)}/><br/>
                        <span>Цена </span><br/>
                        <input type="number"
                               value={this.props.SelectedItem.price}
                               onChange={(e)=> this.props.changePrice(e.target.value)}/><br/>
                        <span>Количество </span><br/>
                        <input type="number"
                               value={this.props.SelectedItem.count}
                               onChange={(e)=> this.props.changeCount(e.target.value)}/><br/>
                        <span>Описание </span><br/>
                        <input type="text"
                               value={this.props.SelectedItem.description}
                               onChange={(e)=> this.props.changeDescription(e.target.value)}/><br/>
                        <img className = "img-fluid" src={"../img/" + this.props.SelectedItem.img}/>
                        <button className= "btn-secondary btn col-6 btn-sm"
                                onClick={()=>this.props.saveChanges(this.props.SelectedItem)}>Сохранить</button>
                        <button className= "btn-secondary btn col-6 btn-sm"
                                onClick={()=>this.props.deleteItem(this.props.SelectedItem.id)}>Удалить</button>
                    </div>):('')
                }
            </div>
            <hr/>
            <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}
            >
                <label>Имя </label>
                <Control.text model=".name" /><br/>
                <label>Цена </label>
                <Control.text model=".price"  type="number"/><br/>
                <label>Кол-во</label>
                <Control.text model=".count"  type="number"/><br/>
                <label>Описание</label>
                <Control.text model=".description" /><br/>
                <label>Изображение</label>
                <Control.file model=".file"/><br/>
                <Control.button model=".submit">Добавить</Control.button>
            </LocalForm>
        </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdministrationPage);
import React, { Component } from "react";
// import "./index.css";
// import "/public/css/index.css";
export default class Items extends Component{

	constructor(props){
		super(props)
		this.state={
			name:"",
			quantity:0,
			price: 0,
		}
	}

store_quantity(item,flavour,cost){
	let value = item.target.value;
	this.setState({quantity:value})
	this.setState({name:flavour})
	this.setState({price:cost * value})

}

submit(){
	console.log(this.state.quantity);
	console.log(this.state.name);
	console.log(this.state.price);
	this.props.history.push("/cart",{
		name : this.state.name,
		quantity: this.state.quantity,
		price: this.state.price,
	})
	

}


	render(){
		return (
<div className="all_items">
<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Chicken Fajita</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Chicken Fajita",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>

<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Chicken Tikka</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Chicken Tikka",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>


<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Ranch Style Chicken</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Ranch Style Chicken",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>

<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Ranch Style Beef</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Ranch Style Beef",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>


<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Fajita Sicillian</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Fajita Sicillian",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>

<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Meat Lovers</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Meat Lovers",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>


<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Chicken BBQ</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Chicken BBQ",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>

<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Smoked Chicken</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Smoked Chicken",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>


<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Peri Peri Chicken</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Peri Peri Chicken",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>

<div>
	<div className="item">
	  
	    <div className="buttons">
	      <span>Pineapple Special</span>
	    </div>


	    <div className = "images">
	    <img className="image" src = {"./img/fajita.png"}/>
	    </div>
	    
	    <div class="description">
	      <p>Fajita Chicken, Onions, Olives, Jalepeno, Tomatoes</p>
	    
	    </div>
	    <div className="quantity">
  
      <input id="quantity" placeholder="Enter Quantity" className="qunant" type="number" name="quantity" onChange={(item)=>this.store_quantity(item,"Pineapple Special",10)}/>
     
    </div>
    <button onClick={this.submit.bind(this)} type="submit" className="btn btn-success">Add to Cart</button>
	 
	    <div className="total-price">Price:$10</div>


    </div>
</div>
    </div>
			);
	}
}
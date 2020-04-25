import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
/***
 * this component is basically rendering the whole content of the class.
 * here we are imply clicking over a single card and that is displayed in the bottom.
 * 1) here a state selectedDish is defined and te data null is passed
 */
  class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            comments:null
        }
    }

    onDishSelect(dish,cmt) {
        this.setState({ selectedDish: dish});
        this.setState({comments:cmt});
    }
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish,dish.comments)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                    <DishDetail dish={this.state.selectedDish} comments={this.state.comments}/>
            </div>
        );
    }
}
export default Menu;
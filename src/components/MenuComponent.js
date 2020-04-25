import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
/***
 * this component is basically rendering the whole content of the class.
 * here we are imply clicking over a single card and that is displayed in the bottom.
 * 1) here a state selectedDish is defined and te data null is passed
 */
  class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
/**
 * 
 * On clicking the card the particular state of the dish is updated which is updated using setState. 
 */
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
/**
 *A function which is showing the card layout of the image selected.The dish is an argument of the
 selected card. It renders the data f there is a card selected otherwise returns an empty <div>
 */
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
/**
 * Main code which deatures the card layout.a menu constant is defined which is runing the whole 
 * card layout in a loop.This card is alaso taking the onClick and tking the dish and setting the state.
 * after that if the click happens and the dish state is set then the renderimage(dish) is called.
 */
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
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
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}
export default Menu;
import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            comments:null
        }
    }
    renderComment(comment) {
        if(comment!=null)
        {
        const cmts=comment.map((comment)=>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    {comment.date}
                    </p>
                </li>
        )});
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmts}
                </ul>

            </div>
        )
        } else{
             return (<div></div>)
        };
    }
    renderDish(dish) {
        if (dish != null)
            return(
              <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        else
            return(
                <div></div>
            );
    }
    render()
    {
        if (this.props.dish == null) {
            return (<div></div>)
        }
        return (
                <div className="row">
                  {this.renderDish(this.props.dish)}
                  {this.renderComment(this.props.comments)}
                </div>
                
        );
    }
}
export default DishDetail;
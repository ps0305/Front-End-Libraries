### Objectives and Outcomes
In this lesson we explore the design of functional components in React. We will reimplement both the MenuComponent and DishdetailComponent as pure functional components. At the end of this exercise you will be able to:

* Implement functional components in React
* Illustrate the reimplementation of presentational components as pure functional components
#### Implementing Functional Components
* Open MenuComponent.js and update it as follows:
```js
import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card
                onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;
```
* Then open DishdetailComponent.js and update it as follows:

```js
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
    
      . . .

    }

    function RenderComments({comments}) {
      
      . . .
      
    }

    const  DishDetail = (props) => {

      . . .
      
    }

export default DishDetail;
```
* Save all the changes and do a Git commit with the message "Functional Components".
### Objectives and Outcomes
In this exercise we will continue modifying the menu component from the previous exercise. Instead of a list, we will use a Card component from reactstrap to display the menu in a different way. Also we will use the Card component to display the details of a selected dish. At the end of this exercise you will be able to:

* Make use of the Card component to display a list of items.
* Use the Card component to display detailed information.

#### Exercise Resources
[dishes.js](https://d3c33hcgiwev3.cloudfront.net/hwM3_kd5EeiV-Ap8VLXT-A_87d2bc70477911e8ac49a50cea1c6260_dishes.js?Expires=1538611200&Signature=P3FMBvKoiaRFbX7r67Bq4U4N0ABQO7r2THJk~1TOXgX3meFOKtXFs3Zh4WyzNKCoTEAd4GtglxBnXWjwwCm6MwvVNyujx7oGI9zSqbV9xst1UERNqeVXxPh7nRU2iZ8bKT812T25HBT3hbGCYdrCYUyJPuTHIW~iye9T79RSynk_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

### Updating the Menu Component
* Open MenuComponent.js and update its contents as follows. Note that we have removed the dishes variable from the state of the component, and updated it to use the Card:

```js
 . . .
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

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

 . . .
 
```
* Add a folder named shared under the src folder.
* In the shared folder, create a new file named dishes.js and add the following content to it (Note: Alternately you can download the dishes.js file given above in the Exercise Resources and move it to the shared folder. Make sure the file is named dishes.js):

```js
export const DISHES =
    [
        {
        id: 0,
        name:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]                        },
        {
        id: 1,
        name:'Zucchipakoda',
        image: 'assets/images/zucchipakoda.png',
        category: 'appetizer',
        label:'',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        },
        {
        id: 2,
        name:'Vadonut',
        image: 'assets/images/vadonut.png',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        },
        {
        id: 3,
        name:'ElaiCheese Cake',
        image: 'assets/images/elaicheesecake.png',
        category: 'dessert',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        }
    ];
```

* Open App.js and update it as follows:
```js
. . .

import { DISHES } from './shared/dishes';

. . .

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

. . .

  <Menu dishes={this.state.dishes} />

. . .
```
* Save the changes and do a Git commit with the message "Components Part 2".


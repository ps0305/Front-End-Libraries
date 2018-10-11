### Objectives and Outcomes
In this exercise you will learn about how we can have separate reducers managing parts of the state, and how they can be combined together to manage the whole state. At the end of this exercise you will be able to:

* Implement reducers that are responsible for only part of the state
* Combine the reducers to manage the entire state
#### Splitting the Reducer
* In the redux folder, create a new file named `dishes.js` and add the following to it:

```js
import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```

* Then, create a file named `comments.js` and add the following to it:
```js
import { COMMENTS } from '../shared/comments';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        default:
          return state;
      }
};
```

* Similarly, create a new file named `promotions.js` and add the following to it:
```js
import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```

* And finally, create a new file named `leaders.js` and add the following to it:

```js
import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```

* Now that we have split the management of state into different reducers that manage partial state, we need to combine them together. Open configureStore.js and update it as follows:

```js
import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}
```

* Now we can safely delete the reducer.js file from the project.
* Save all the changes and do a Git commit with the message `"Combining Reducers"`.

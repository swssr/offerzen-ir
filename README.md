# OfferZen Interview Requests 
##  Task A
### `Overview`
Hello there! The completed solution is [deployed here](https://offerzen-ir.vercel.app/). \
If you want to run it locally please follow below.

#### `Local Run`
```bash
$ git clone https://github.com/swssr/offerzen-ir.git

$ cd offerzen-ir/

# Please make sure you have `nodejs` installed on your machine 
$ npm i && npm start
```
***

## 1. `What I did?`

I used `create-react-app` with `typescript`. \
 Might seem like over-engineering but it really helps catch oopies before they hurt.

I stored all of the mock `data` on a `db/index.ts` file that serves the payload as a normal JavaScript array.

You'll also find a `models/` directory that contains all of the interfaces and possibly class declaration files. This is a *pattern I've learned and grown to love from angular*.

Other directories are self-describing with `helpers/` - containing all utility and helper functions like `timeRelativity` function. `assets/` has all of the media assets that I use. 

**Rendering UI**
- First step was declaring the `color & spacing variables` up top of the `index.css` file.
- Next I used the html `<table>` element to render the whole table UI.
- I used css `:empty` pseudo-class to add dash on empty cells.
- Finally, when everything worked just fine, I split up the table `row` and `header` cells into own components.

##  Task B

I first started by cleaning up any left over issues from task one. \
From the on I build a container re-using the wrapper already defined on Task 1. \
Next step was adding a wrapped `<input>` element with an svg search icon from Figma on top.

- I made the *search-icon* `pointer-events: none;` to make it click through.
- I cleaned up the input text and placeholder.
- Finally, I noticed that when typing your search query, the table has jarring content shift, I made the `table-layout: fixed;` to address this.

The search mechanic is using a simple `filter` and `includes` string function. The original data isn't mutated while filtering.

## Task C

Which is section I now had to mutate the data being render. Since I chose to separate the filtered and unfiltered I had to find a way to sync any changes.
- I could've went used `context` and created a pattern similar to redux but I chose not to since it I could easily *lift up the state*.
- I have `handleUpdate` function on the topmost component which I pass down to children who need it.
- With all this I'm able to **filter** and **mutate** the state at the same time.


> [🚀🚀🚀 CLICK TO PREVIEW](https://offerzen-ir.vercel.app/)
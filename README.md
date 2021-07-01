# OfferZen Interview Requests 
## Assessment - Task 1
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




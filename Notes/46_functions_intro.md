# Summary

Sorting objects is tricky business. <br>
First of all, you have to decide what kind of ordering system you want to use to sort the objects, and then you have to actually sort them. <br>

Looking at all the objects on the shelf behind me, I can sort them based on a number of different factors; physical size, weight, color, brand, the date I got the item, the day I used it last. This is where computer logic and human thinking diverge.

As humans, we have an innate ability to quickly sort objects based on certain criteria without really thinking about what we're doing. As an example, looking briefly at all these objects behind me, you can quickly sort them by physical size in your head.

But if I asked you to sort them based on a more complex factor, like the date I last used them, you need to think a bit harder and walk through some sort of sorting process, something like this.

Number one, pick a random object and find its last use date. Number two, pick another random item and find its last use date. Number three, compare the second item to the first one and place the one with the most recent date first in your array. Number four, take another random item and find its last use date. Number five, compare this date to the last item in the array. If it's older than the one in the last item then place it at the end of the array. If it's newer than the last item then check it against the next item in the array. If that's older then place them in between, otherwise keep moving it up et cetera, et cetera, et cetera.

This process is an algorithm, a list of steps, and if we turn this algorithm into code, we create a function. Functions in programming work the same way functions in real life do, we specify a series of steps, and based on the outcome of each of these steps, we decide what to do next. The difference between how we do this in the real world and how a computer does it in a function is in the real world we kind of fudge the steps and don't really think about what we're doing.

In computer programming, we have to carefully spell out each step and think about the logical chain we create to make sure we get the result we want. Because, unlike a human, we can't tell a computer sort these items into some sort of order that makes sense. We have to explicitly explain what we mean by sort, what factors should be considered when creating an order for the items and what procedure to use to go through each of the items to get the actual sorting right. In this chapter, we'll dive deep into the world of functions and methods in JavaScript to figure out how they work and what we can do with them.

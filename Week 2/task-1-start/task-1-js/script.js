window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */

console.log(document.getElementsByTagName("p"))

/***OUTPUT: 
 * 
 * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
 * 
 * 
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */

console.log(document.querySelector("p"))

/***OUTPUT: 
 * 
 * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
 *      
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */

console.log(document.getElementsByClassName("inner-container"))

/***OUTPUT: 
 * 
 * HTMLCollection(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
console.log(document.getElementsByClassName("img-container").length)
console.log(document.getElementsByClassName("img-container")[7])
/***OUTPUT: 
 * 
 * <div class="img-container">
                        <img class="img-image" src="task-1-images/seventeen.png">
                    </div>
 */


/*************************************** */
/* 5A: all h2 elements */

/* 5B: length of the list in 5A */

/* 5C: the text content of the first element in the list from 5A */
/***CODE */

console.log(document.getElementsByTagName("h2"))
console.log(document.getElementsByTagName("h2").length)
console.log(document.getElementsByTagName("h2")[0].textContent)

/***OUTPUT: 
 * 
 * HTMLCollection [h2]
 * 1
 * The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */

console.log(document.getElementById("parent"))

/***OUTPUT: 
 * 
 * <section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE */

// document.querySelector("p").textContent = "'New text in paragraph one: text changed by Simon Duchaine Morneau on the following date: 29th of January."

// // /*************************************** */
// // /* 2: Select all elements in the HTML that have the class name content-container
// //  and change the background color ... of first and second ...*/
// // /***CODE */

// document.getElementsByClassName("content-container")[0].style.background = "orange";
// document.getElementsByClassName("content-container")[1].style.background = "purple";

// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */

// document.querySelector("img").setAttribute("src", "task-1-images/seven.png") 
// console.log(document.querySelector("img"))

// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */

// // console.log(document.getElementsByTagName("h2").textContent = "TEST 123")
// // console.log(document.querySelector("TEST 123").parentElement)
// // console.log(document.getElementsByTagName("h2").textContent)

// // document.getElementsByTagName("h2")[0].textContent = "TEST 123"

// // document.getElementsByTagName("p")[2].textContent = "TEST 123"

// // document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"

// newH2 = document.createElement("h2");
// newH2.innerHTML = "TEST 123";

// let parentElement = document.getElementsByTagName("p")[2];
// parentElement.appendChild(newH2);

// console.log(parentElement)


// // console.log(document.getElementsByTagName("h2"))
// // console.log(document.getElementsByTagName("h2")[0].innerHTML)

// // console.log(document.getElementsByTagName("h2").children[] = "TEST 123")
// // console.log(document.getElementsByTagName("h2"))

// /*************************************** */
// /* 5: Select the fourth paragraph element on the page and 
// add to the existing content an h2 element containing the text `TEST 123`
// /***CODE */

// document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </h2>"

// // document.getElementsByTagName("p")[3].textContent += "TEST 123"

// // /*************************************** */
// // /* 6: Select the fifth paragraph element on the page and add to the existing content an img element that holds `one.png`, and add the class newStyle to said paragraph element.
// /***CODE */

// document.querySelectorAll("p")[4].innerHTML += '<img src="task-1-images/one.png" />'


// //new element
// let newImg = document.createElement("img");
// newImg.classList.add("p");
// document.querySelector("img").setAttribute("src", "task-1-images/seven.png") 
// newImg.innerHTML = "task-1-images/eleven.png"
// newDiv.style.backgroundColor = "purple";
// // access parent element
// let parentElement = document.getElementsByClassName("img-container")
// parentElement.appendChild(newImg)





// document.querySelector("img").setAttribute("src", "task-1-images/seven.png") 

// document.getElementsByTagName("p")[4].innerHTML += "TEST 123"

// /*************************************** */
// /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
// then access all elements with class name inner-container and save to a variable called `innerContainers`. 
// Next, iterate over the colors array, and for each color: 
// assign the element from innerContainers variable with the same index 
// (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
// a background using that color.
// /***CODE */

// /*************************************** */
// /*** END PART TWO MODIFY */ 






/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */

let allPTagsThree = document.querySelectorAll("p");
console.log(allPTagsThree);

// for (let i = 0; i < allPTagsThree.length; i++) {

//     customCreateElement(allPTagsThree[i]);



// }

for(parent of allPTagsThree) {

    customCreateElement(parent);

}
// customCreateElement(allPTagsThree[0])

/* 1B: Create a function:function customCreateElement(parent){ //body } */

function customCreateElement(parent) {

//body

//new element
newP = document.createElement("p");
newP.classList.add("img-descript");
newP.innerHTML = "using create Element";
newP.style.background = "green";
newP.style.color = "white";

// access parent element
parent.appendChild(newP)

}

// for (let i = 0; i < allPTagsThree.length; i++) {

//     customCreateElement(allPTagsThree[i]);

// }


// for(parent in allPTagsThree) {

//     customCreateElement(parent);

// }


// /***EXPLANATION::
//  * 
//  * I don't know why it doesn't work... It should work...
//  * 
//  */

// /*************************************** */
// /* 2: GRID OF BOXES */
// /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
// /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
// /* 2C:Then append this new element to the parent variable within the function. 
// /* 2D:Finally, return</code> this new element */
// /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
//     Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
//     Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
// /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
//     Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
//     in a variable i.e. returnedDiv. 
//     Set the style (left and top) to the of this element to 
//     the necessary x and y position (use the counter variables in the for nested for loop to 
//     calculate the new positions.
// /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
//     and otherwise let it have a background of purple.</li>
// /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
//     otherwise lat it have the content `ODD`.*/

// /***CODE */

// function customNewBoxCreate(parent) {

//     //body

//     newDiv  = document.createElement("div");
//     newDIV.classList.add("testDiv");

//     parent.appendChild(newDiv)

// }


// /***EXPLANATION::
//  * 
//  * 
//  */

// /*************************************** */
// /* 3: GRID OF BOXES II */

// /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
//     USE the same customNewBoxCreate function..., the only difference is that the parent element 
//     for each of these new divs is the element whose id is `new-grid-three`. */
// /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
//     when it is a column where the remainder is 1 or when the remainder is 2 ... 
//     HINT:: look up the % operator.. */
// /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
//         then the second a background of orange and the third yellow. */
// /*  3D: Finally, let each div contain the text content representing the associated remainder 
//     when dividing by three. */

// /***CODE */


/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}
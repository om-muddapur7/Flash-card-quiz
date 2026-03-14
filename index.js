const topics = [
    {
        id: 1,
        title: "DSA",
        image: "dsa.png"
    },
    {
        id: 2,
        title: "Dev",
        image: "dev.jpg"
    },
    {
        id: 3,
        title: "AI-ML",
        image: "ai.jpg"
    },
    {
        id: 4,
        title: "Web3",
        image: "web3.jpg"
    }
];


//Topics Cards
const topicsContainer = document.getElementById("topicsContainer");

topics.forEach(topic => {
    topicsContainer.innerHTML += `
        <div class="topics" id="${topic.id}">
            <h2>${topic.title}</h2>
            <img src="${topic.image}" alt="" height=250px width=300px>
        </div>
    `;
});

// cards selection
let selection = null;

document.querySelectorAll(".topics").forEach(topic => {
    topic.addEventListener("click", function(){
        document.querySelectorAll(".topics").forEach(c => 
            c.classList.remove("active")
        );

        this.classList.add("active");
        selection = this.id;
        console.log(selection);
    });
});


// all selections
document.getElementById("submitbtn").addEventListener("click", () => {
    const questionCnt = document.getElementById("inp").value;

    if(!selection){
        alert("Select topic");
        return;
    }

    if(!questionCnt){
        alert("Enter no. of questions");
        return;
    }

     if(questionCnt > 3){
        alert("OOPs only 3 available");
        return;
    }

    const selected = {
        topic: selection,
        questions : questionCnt
    };

    console.log(selected);

    window.location.href = `questions.html?topic=${selection}&count=${questionCnt}`;
})


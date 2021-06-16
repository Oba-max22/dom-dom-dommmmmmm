document.addEventListener('DOMContentLoaded', () => {

    const button = document.createElement('button');
    const buttonText = document.createTextNode('Add Square');
    button.className = 'btn';
    button.appendChild(buttonText);
    document.body.appendChild(button);

    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const color = ['yellow', 'gold', 'lawngreen', 
                    'lightcoral', 'lightseagreen', 'lightsalmon'];
    
    function getRandomColor () {
        let randomColor = color[Math.ceil(Math.random() * color.length)];
        return randomColor;
    }

    let n = 0;
    function addSquare () {
        n++;
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode(n);
        h1.className = 'h1';
        h1.id = h1Text;
        h1.appendChild(h1Text);

        let square = document.createElement('div');
        square.className = 'square';
        square.appendChild(h1);
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            h1.style.opacity = '1';
        });

        square.addEventListener('mouseleave', () => {
            h1.style.opacity = '0';
        });

        square.addEventListener('click', () => {
            let newColor = getRandomColor();
            square.style.background = newColor;
        });

        square.addEventListener('dblclick', () => {
            let index = Number(h1.innerHTML);
            if (index % 2 == 0) {
                console.log("Even!");
                let nextSquare = square.nextElementSibling;
                if (nextSquare != null) {
                    nextSquare.remove();
                } else {
                    console.log("display alert!");
                    alert(`There is no square after the clicked square with id ${index}`);
                }
            } else {
                console.log("Odd!");
                let prevSquare = square.previousSibling;
                if (prevSquare != null) {
                    prevSquare.remove();
                } else {
                    console.log("display alert!");
                    alert(`There is no square before the clicked square with id ${index}`);
                }
            }
        });        
    }

    button.addEventListener('click', () => {
        addSquare();
    });
    
});

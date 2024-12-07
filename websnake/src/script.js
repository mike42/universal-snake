window.onload = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    const segment = document.getElementById('segment');
    const head = document.getElementById('head');
    const food = document.getElementById('food');

    ctx.drawImage(segment, 0, 0, 32, 32)
    ctx.drawImage(head, 32, 32, 32, 32)
    ctx.drawImage(food, 64, 64, 32, 32)

    console.log("Hello");
};

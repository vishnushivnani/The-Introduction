var points;
var font;
var amt;
var multiplier = 0.2;
var r = [];
var g = [];
var b = [];

function preload() {
    font = loadFont('Calistoga-Regular.ttf');
}

// called once
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    // Retrieve text points
    points = font.textToPoints('Runners ',width/2-480,height/2-50,width/height+140, {
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points2 = font.textToPoints("landscape,",width/2,height/2+150,width/height+140,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points3 = font.textToPoints("Vishnu ",width/2-600,height/2-200,width/height+100,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points4 = font.textToPoints("presents  :-",width/2-100,height/2-200,width/height+100,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
    points5 = font.textToPoints("The Endless Spirit",width/2-280,height-50,width/height+60,{
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });




}

// called every frame
function draw() {
    var trail = map(mouseY, 0, height, 1, 10);
    fill(0, trail);
    rect(0, 0, width, height);

    noStroke();
    for(let i= 0; i < points.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points2.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points2[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points3.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points3[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points4.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points4[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
    for(let i= 0; i < points5.length; i++) {
        // Set color
        fill(214, 0, 0);

        // Get locations
        var p = points5[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
}
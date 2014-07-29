    /*
    |--------------------------------------------------------------------------
    | D3 Tutorials
    |--------------------------------------------------------------------------              
    */

    var D3 = {
        selectAndAppend: function() {

            // Replace para text with defined text
            d3.select("p").text("Hello World!");

            // Add an element to another element
            d3.select("#body").append("p").text("D3");

        },
        svgShapes: function() {

            d3.select("body")
                .append("p")
            // Add any CSS 2 args 1st property 2nd value
            .style("color", "red")
            // change any property 2 args 1st property 2nd value
            .attr("class", "d3")
                .text("D3");

            // Append SVG to page
            var canvas = d3.select("#svgShapes")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

            // Append an SVG Circle to the page
            var circle = canvas.append("circle")
                .attr("cx", 250)
                .attr("cy", 250)
                .attr("r", 50)
                .attr("fill", "red");

            // Append a rectangle
            var rect = canvas.append("rect")
                .attr("width", 100)
                .attr("height", 50);

            // Append a line
            var line = canvas.append("line")
                .attr("x1", 0)
                .attr("y1", 100)
                .attr("x2", 400)
                .attr("y2", 400)
                .attr("stroke", "green")
                .attr("stroke-width", 10);
        },
        visualizingData: function() {

            var dataArray = [20, 40, 50];

            var canvas = d3.select("#visualizingData")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var bars = canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                .append("rect")
                .attr("width", function(d) {
                    return d * 10;
                })
                .attr("height", 50)
                .attr("y", function(d, i) {
                    return i * 100
                });

        },
        scales: function() {

            var dataArray = [20, 40, 50, 60];

            var width = 500;
            var height = 500;

            var widthScale = d3.scale.linear()
                .domain([0, 60])
                .range([0, width]);

            var colorScale = d3.scale.linear()
                .domain([0, 60])
                .range(["red", "blue"]);

            var canvas = d3.select("#scales")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

            var bars = canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                .append("rect")
                .attr("width", function(d) {
                    return widthScale(d);
                })
                .attr("height", 50)
                .attr("fill", function(d) {
                    return colorScale(d);
                })
                .attr("y", function(d, i) {
                    return i * 100
                });

        },
        groupsAndAxes: function() {

            var dataArray = [20, 40, 50, 60];

            var width = 500;
            var height = 500;

            var widthScale = d3.scale.linear()
                .domain([0, 60])
                .range([0, width]);

            var colorScale = d3.scale.linear()
                .domain([0, 60])
                .range(["red", "blue"]);

            var axis = d3.svg.axis()
                .ticks(5)
                .scale(widthScale);

            var canvas = d3.select("#groupsAndAxes")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(20, 0)");

            var bars = canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                .append("rect")
                .attr("width", function(d) {
                    return widthScale(d);
                })
                .attr("height", 50)
                .attr("fill", function(d) {
                    return colorScale(d);
                })
                .attr("y", function(d, i) {
                    return i * 100
                });

            canvas.append("g")
                .attr("transform", "translate(0, 400)")
                .call(axis);

        },

        enterUpdateExit: function() {

            var data = [10, 10, 10];

            var canvas = d3.select("#enterUpdateExit")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var circle = canvas.append("circle")
                .attr("cx", 250)
                .attr("cy", 250)
                .attr("r", 50)
                .attr("fill", "red");


            var circles = canvas.selectAll("circle")
                .data(data)
                .attr("fill", "green")
                .enter()
                .append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 25)
                .attr("fill", "red")
                .exit()
                .append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 25)
                .attr("fill", "blue");


        },
        transitions: function() {

            var data = [10, 10, 10];

            var canvas = d3.select("#transitions")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var circle = canvas.append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 25);

            circle.transition()
                .duration(1500)
                .delay(2000)
                .attr("cx", 150)
                .each("end", function() {
                    d3.select(this).attr("fill", "red")
                })
                .transition()
                .attr("cy", 150)
                .each("end", function() {
                    d3.select(this).attr("fill", "yellow")
                })
                .transition()
                .attr("cx", 50)
                .each("end", function() {
                    d3.select(this).attr("fill", "green")
                })
                .transition()
                .attr("cy", 50)
                .each("end", function() {
                    d3.select(this).attr("fill", "black")
                });

        },
        workingWithArrays: function() {

            var data = [10, 20, 30, 40, 50];

            data.shift();

            // reorder value descending
            data.sort(d3.descending);

            //min
            d3.min(data);

            //max
            d3.max(data);

            // get min and max
            d3.extend(data);

            // add all array values
            d3.sum(data);

            d3.mean(data);

            d3.median(data);

            // random order
            d3.shuffle(data);

        },

        loadingExternalData: function() {

            d3.json("/assets/json/data.json", function(data) {

                var canvas = d3.select("#loadingExternalData")
                    .append("svg")
                    .attr("width", 500)
                    .attr("height", 500);

                canvas.selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("width", function(d) {
                        return d.age * 10
                    })
                    .attr("height", 40)
                    .attr("fill", "black")
                    .attr("y", function(d, i) {
                        return i * 50
                    });

                canvas.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("fill", "white")
                    .attr("y", function(d, i) {
                        return i * 50 + 24
                    })
                    .text(function(d) {
                        return d.name
                    });

            })

        },
        paths: function() {

            var canvas = d3.select("#paths")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var data = [
                {x: 10, y: 20}, {x: 40, y: 60}, {x: 50, y: 70}
            ];

            var group = canvas.append("g")
                .attr("transform", "translate(100, 100)");

            var line = d3.svg.line()
                .x(function (d){return d.x; })
                .y(function (d){return d.y; });   

            group.selectAll("path")
                .data([data])
                .enter()
                .append("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 2);



        },

    };


    D3.paths();
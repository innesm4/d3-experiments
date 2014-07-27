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
                                .attr("width", function(d) { return d * 10; })
                                .attr("height", 50)
                                .attr("y", function(d, i) { return i * 100});

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
                                .range(["red","blue"]);                    

            var canvas = d3.select("#scales")
                            .append("svg")
                            .attr("width", width)
                            .attr("height", height);

            var bars = canvas.selectAll("rect")
                            .data(dataArray)
                            .enter()
                                .append("rect")
                                .attr("width", function(d) { return widthScale(d); })
                                .attr("height", 50)
                                .attr("fill", function(d) { return colorScale(d); })
                                .attr("y", function(d, i) { return i * 100});

        },
        //https://www.youtube.com/watch?v=SYuFy1j8SGs&index=15&list=UUNYL0ZF2j8-OSGZ4iHBLNPA
        groupsAndAxes: function() {

            var dataArray = [20, 40, 50, 60];

            var width = 500;
            var height = 500;

            var widthScale = d3.scale.linear()
                                .domain([0, 60])
                                .range([0, width]);

            var colorScale = d3.scale.linear()
                                .domain([0, 60])
                                .range(["red","blue"]);                    

            var canvas = d3.select("#groupsAndAxes")
                            .append("svg")
                            .attr("width", width)
                            .attr("height", height);

            var bars = canvas.selectAll("rect")
                            .data(dataArray)
                            .enter()
                                .append("rect")
                                .attr("width", function(d) { return widthScale(d); })
                                .attr("height", 50)
                                .attr("fill", function(d) { return colorScale(d); })
                                .attr("y", function(d, i) { return i * 100});

        },

    };


    D3.groupsAndAxes();























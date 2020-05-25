function verticalShapeFlip(pathProperty, shape) {
    var vertices = shape.vertices;
    
    var minsAndMaxes = getMinsAndMaxes(vertices);
    var minX = minsAndMaxes[0];
    var maxX = minsAndMaxes[1];
    var minY= minsAndMaxes[2];
    var maxY = minsAndMaxes[3];
    var w = maxX - minX;
    var h = maxY - minY;
    var fold = w / 2 +minX;
    
    var translatedShape = new Shape();
    var newVertices = [];
    var newInTangents = [];
    var newOutTangents = [];
    var newX, newY;
    
    for(var i = 0; i < vertices.length; i++) {
        newY = vertices[i][1];
        
        if(vertices[i][0] < fold) {
            newX = fold + Math.abs(fold - vertices[i][0]);
            } else if(vertices[i][0] > fold) {
                newX = fold - Math.abs(fold - vertices[i][0]);
                } else {
                    newX = vertices[i][0];
                    }
                newVertices.push([newX, newY]);
                newInTangents.push([shape.inTangents[i][0]*-1, shape.inTangents[i][1]]);
                newOutTangents.push([shape.outTangents[i][0]*-1, shape.outTangents[i][1]]);
        }
    
    translatedShape.vertices = newVertices;
    translatedShape.inTangents = newInTangents;
    translatedShape.outTangents = newOutTangents;
    translatedShape.closed = true;
    pathProperty.setValue(translatedShape);
    }

function horizontalShapeFlip(pathProperty, shape) {
    var vertices = shape.vertices;
    
    var minsAndMaxes = getMinsAndMaxes(vertices);
    var minX = minsAndMaxes[0];
    var maxX = minsAndMaxes[1];
    var minY= minsAndMaxes[2];
    var maxY = minsAndMaxes[3];
    var w = maxX - minX;
    var h = maxY - minY;
    var fold = h / 2 +minY;
    
    var translatedShape = new Shape();
    var newVertices = [];
    var newInTangents = [];
    var newOutTangents = [];
    var newX, newY;
    
    for(var i = 0; i < vertices.length; i++) {
        newX = vertices[i][0];
        
        if(vertices[i][1] < fold) {
            newY = fold + Math.abs(fold - vertices[i][1]);
            } else if(vertices[i][1] > fold) {
                newY = fold - Math.abs(fold - vertices[i][1]);
                } else {
                    newY = vertices[i][1];
                    }
                newVertices.push([newX, newY]);
                newInTangents.push([shape.inTangents[i][0], shape.inTangents[i][1]*-1]);
                newOutTangents.push([shape.outTangents[i][0], shape.outTangents[i][1]*-1]);
        }
    
    translatedShape.vertices = newVertices;
    translatedShape.inTangents = newInTangents;
    translatedShape.outTangents = newOutTangents;
    translatedShape.closed = true;
    pathProperty.setValue(translatedShape);
    }

function getMinsAndMaxes(vertices) {
        var minX = vertices[0][0];
        var maxX = vertices[0][0];
        var minY= vertices[0][1];
        var maxY = vertices[0][1];
        
        for(var i = 0; i < vertices.length; i++) {
            if(vertices[i][0] < minX) {
                minX = vertices[i][0];
                }
            
            if(vertices[i][0] > maxX) {
                maxX = vertices[i][0];
                }
            
            if(vertices[i][1] < minY) {
                minY = vertices[i][1];
                }
            
            if(vertices[i][1] > maxY) {
                maxY = vertices[i][1];
                }
            }
        
        return [minX, maxX, minY, maxY];
    }

var shapeProperty = app.project.activeItem.layer(1).property("Contents").property("Shape 1").property("Contents").property("Path 1").property("Path");
verticalShapeFlip(shapeProperty, shapeProperty.value);
//horizontalShapeFlip(shapeProperty, shapeProperty.value);
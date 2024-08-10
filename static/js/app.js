// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadataField = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let result = metadataField.filter(obj => obj.id == sample);
    let filterResult = result[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let display = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    display.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filterResult).forEach(([key, value]) => {
        display.append("h6").text(`${key} ${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sampleData = data.samples;

    // Filter the samples for the object with the desired sample number
    let result = sampleData.filter(obj => obj.id == sample);
    let filterResult = result[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filterResult.otu_ids;
    let otu_labels = filterResult.otu_labels;
    let sample_values = filterResult.sample_values;

    // Build a Bubble Chart
    let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Picnic"     
      }

  }];

  let bubbleLayout = {
    title: 'Bacterial Cultures per Sample',
    xaxis: { title: 'OTU ID' },
    yaxis: { title: 'Number of Bacteria' },
    paper_bgcolor: 'lightskyblue',
    plot_bgcolor: 'white',
    font: {
        color: 'white'
    }
}

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

// For the Bar Chart, map the otu_ids to a list of strings for your yticks
// Build a Bar Chart
// Don't forget to slice and reverse the input data appropriately
  let barData = [{
    y: otu_ids.slice(0, 10).map(val => `OTU ${val}`).reverse(),
    x: sample_values.slice(0, 10).reverse(),
    text: otu_labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: "h",
    border: 2,
    marker: {
      color: "lightskyblue"
    }
  
}];

let barLayout = {
  title: 'Top Ten Bacteria Cultures Found',
  xaxis: { title: 'Number of Bacteria' },
  plot_bgcolor: 'white'       
}

    // Render the Bar Chart
Plotly.newPlot("bar", barData, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let sampleName = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dataid = d3.select("#selDataset")

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleName.forEach((sampleid)=> {
      dataid.append("option")
          .text(sampleid)
          .property("value", sampleid)
  })

    // Get the first sample from the list
    let firstSample = sampleName[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();

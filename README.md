<h1  align="center">Belly Button Biodiversity D3 JavaScript and Plotly Project</h1>
<a name="readme-top"></a>


<!-- TABLE OF CONTENTS -->



Table of Contents
<ol>
<li><a href="#about-the-project">About The Project</a></li>
<li><a href="#built-with-d3-javascript-and-plotly-framework">Built With D3 Javascript and Plotly Framework</a></li>
<li><a href="#contributing">Contributing (UC Berkeley Bootcamp Students Only) </a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>


<!-- ABOUT THE PROJECT -->

## About The Project

### Background
In this assignment involves building an interactive dashboard to explore the `Belly Button Biodiversity` dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or `OTU`s, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Instructions
The following steps to be completed:

1. Use the D3 library to read in `samples.json` from the URL `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use 'sample_values' as the values for the bar chart.

- Use 'otu_ids' as the labels for the bar chart.

- Use 'otu_labels' as the hovertext for the chart.
  
3. Create a bubble chart that displays each sample.

- Use `otu_ids` for the x values.

- Use `sample_values` for the y values.

- `Use sample_values` for the marker size.

- `Use otu_ids` for the marker colors.

- `Use otu_labels` for the text values.

4. Display the sample's metadata, i.e., an individual's demographic information.
   - Loop through each key-value pair from the metadata JSON object and create a text string.
   - Append an html tag with that text to the `#sample-metadata` panel.

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:



6. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

### Live Link to GitHub Pages:

https://thaychansy.github.io/belly-button-challenge/
   
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  
<!-- BUILT -->

## Built with D3 JavaScript and Plotly Framework 

ETL is a data integration process that involves extracting data from various sources, transforming it into a desired format, and loading it into a target system for further analysis or processing. It's a critical component of data warehousing and business intelligence solutions.


1. Extraction
- Data Sources: This phase involves identifying and connecting to data sources, which can include databases (SQL, NoSQL), flat files (CSV, JSON, XML), APIs, or other systems.
- Data Retrieval: The data is extracted from these sources and fetched into the ETL process.

2. Transformation
- Data Cleaning: This phase involves handling missing values, inconsistencies, and errors in the extracted data.
- Data Standardization: Data is formatted consistently across different sources.
- Data Enrichment: Additional data might be added or derived from existing data.
- Data Aggregation: Data is summarized or aggregated as required.
- Data Validation: Data integrity is checked to ensure accuracy.

3. Loading
- Target System: The transformed data is loaded into a target system, such as a data warehouse, data mart, or operational database.
- Data Storage: Data is stored in a structured format for efficient querying and analysis.
  
  <p  align="right">(<a  href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->

## Contributing 

(UC Berkeley Bootcamp Students Only)  

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b new-branch-name`)

3. Commit your Changes (`git commit -m 'Add some message'`)

4. Push to the Branch (`git push origin new-branch-name`)

5. Create a pull request. 

Forking a repository and creating a pull request on GitHub is a great way to contribute to open-source projects. Here's a breakdown of the process:

1. Forking the Repository:

Find the repository you want to contribute to on GitHub.
Click on the "Fork" button in the top right corner. This creates a copy of the repository in your own account.

2. Clone the Forked Repository to Your Local Machine

You'll need Git installed on your system.
Use Git commands to clone your forked repository to your local machine. There will be instructions on the GitHub repository page for cloning.

3. Making Changes (Local Work):

Make your changes to the code in your local copy.
Use Git commands to track your changes (adding, committing).

4. Pushing Changes to Your Fork:

Once you're happy with your changes, use Git commands to push your local commits to your forked repository on GitHub.

5. Creating a Pull Request:

Go to your forked repository on GitHub.
Click the "Compare & pull request" button (might appear as a yellow banner).
Here, you'll see a comparison between your changes and the original repository.
Write a clear title and description for your pull request explaining the changes you made.
Click "Create Pull Request" to submit it for review.

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under  GNU General Public License. See `LICENSE.txt` for more information.

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Thay Chansy - [@thaychansy](https://twitter.com/thaychansy) - or thay.chansy@gmail.com


Please visit my Portfolio Page: thaychansy.github.io (https://thaychansy.github.io/)



Project Live Link: [Belly Button Biodiversity Dashboard](https://thaychansy.github.io/belly-button-challenge/)
  

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

   
  

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments


Here's a list of resources we found helpful and would like to give credit to. 

  
* [Chat GPT] [ChatGPT](https://chatgpt.com/)
* [Google Gemini] [Gemini Generative AI](https://gemini.google.com/app)


<p  align="right">(<a  href="#readme-top">back to top</a>)</p>


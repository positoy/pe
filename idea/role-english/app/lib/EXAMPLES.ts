export default {
  job_sentence: {
    input: {
      occupation: "Software developer",
      proficiency: "intermediate",
    },
    output: {
      occupation: "Software developer",
      proficiency: "intermediate",
      role: "data analyst",
      steps: [
        "Data Collection",
        "Data Preprocessing",
        "Data Analysis",
        "Model Development",
        "Reporting",
      ],
      situations: [
        [
          "Identify required data sources",
          "Establish a data collection plan",
          "Set up data collection tools",
          "Run data collection",
          "Check data quality",
        ],
        [
          "Data Cleaning",
          "Handling missing values",
          "Outlier handling",
          "Data Conversion",
          "Data Scaling",
        ],
        [
          "Data Visualization",
          "Perform statistical analysis",
          "Application of machine learning model",
          "Interpretation of Results",
          "Drawing insights",
        ],
        [
          "Select model",
          "Separate training data and validation data",
          "Model Learning",
          "Performance Evaluation",
          "Hyperparameter Tuning",
        ],
        [
          "Create analysis report",
          "Production of results presentation material",
          "Meeting with decision makers",
          "Converge feedback",
          "Write a project completion report",
        ],
      ],
      utterances: [
        [
          [
            "Can you provide a list of potential data sources for this project?",
            "What are the primary sources of data we should consider?",
            "Do we have access to real-time data streams for this analysis?",
            "Are there any restrictions on the type of data we can collect?",
            "How can we ensure the reliability and accuracy of the data sources?",
          ],
          [
            "How do we plan to structure the data collection process?",
            "Can we establish a deadline for each phase of data collection?",
            "What tools and technologies will we use for collecting the data?",
            "Who is in charge of overseeing the data collection plan?",
            "Do we need any special permissions or protocols to collect this data?",
          ],
          [
            "What criteria should we consider when selecting data sources?",
            "Are there any legal or ethical considerations in choosing data sources?",
            "Can we verify the accuracy and reliability of the data sources?",
            "Do we need to obtain consent from data owners to use their data?",
            "How can we ensure the data sources meet the project requirements?",
          ],
          [
            "What are the potential risks and challenges in collecting this data?",
            "How can we optimize the data collection process for efficiency?",
            "Are there any data privacy concerns we need to address?",
            "Do we have backup plans in case of data collection failures?",
            "Who will be responsible for monitoring the data collection progress?",
          ],
          [
            "What measures are in place to ensure the quality and integrity of collected data?",
            "How can we identify and address any data anomalies during the collection phase?",
            "Are there tools or techniques available to automate data quality checks?",
            "Should we conduct data audits periodically to validate the accuracy of collected data?",
            "Who will be tasked with evaluating the overall data quality and making improvements?",
          ],
        ],
        [
          [
            "What methods can we use to handle missing values in the dataset?",
            "Should we impute missing data or remove instances with missing values?",
            "Are there any specific criteria for determining when to discard outliers?",
            "How do we identify and treat duplicate entries in the dataset?",
            "Can we visualize data distribution before and after preprocessing?",
          ],
          [
            "What impact can missing values have on the analysis results?",
            "Should we consider different imputation techniques based on data type?",
            "Is there a threshold percentage of missing values that necessitates data removal?",
            "How can we flag missing values for further investigation in the preprocessing phase?",
            "Who is responsible for documenting the process of missing data handling?",
          ],
          [
            "What statistical methods can we apply to detect outliers in the dataset?",
            "Are there domain-specific rules to define outliers in the context of our analysis?",
            "Should we analyze outliers individually to understand their impact on results?",
            "How can we decide whether to remove or transform outliers in the dataset?",
            "Who will validate the outlier detection process and ensure its accuracy?",
          ],
          [
            "What data transformation techniques are most suitable for our dataset?",
            "How can we standardize or normalize features to prepare data for analysis?",
            "Are there specific transformation pipelines we should follow for different data types?",
            "Should we consider log or power transformations for skewed data distributions?",
            "Who will validate the transformed data and monitor its impact on analysis outcomes?",
          ],
          [
            "What benefits does data scaling offer in the context of our analysis?",
            "Should we apply min-max scaling, standardization, or normalization to our features?",
            "How can we determine the appropriate scaling method based on data distribution?",
            "Are there non-linear scaling techniques that may be more suitable for certain features?",
            "Who will verify the consistency and effectiveness of the data scaling process?",
          ],
        ],
        [
          [
            "What types of visualizations would best represent the data for analysis?",
            "Are there any specific tools or software preferred for data visualization tasks?",
            "Can we create interactive dashboards to explore the data visually?",
            "Do we need to consider any security measures when sharing visualized data?",
            "How can data visualization enhance communication of insights to stakeholders?",
          ],
          [
            "What statistical methods are suitable for the type of data we have?",
            "Is there a need for hypothesis testing in our analytical process?",
            "Can we perform regression analysis to identify relationships within the data?",
            "How do we ensure the statistical validity and reliability of our analysis?",
            "Are there any assumptions we need to validate before conducting statistical tests?",
          ],
          [
            "Which machine learning algorithms are most appropriate for our dataset?",
            "Do we need to preprocess the data before applying machine learning models?",
            "What performance metrics should we use to evaluate the model's accuracy?",
            "How can we prevent overfitting or underfitting when training the models?",
            "Are there any considerations for feature selection or engineering in model development?",
          ],
          [
            "What are the key findings or trends identified from the data analysis?",
            "How can we validate the significance of the results obtained?",
            "Are there any patterns or outliers that require further investigation?",
            "What implications do the results have for the project or business goals?",
            "Can we present the results in a clear and concise manner for stakeholders to understand?",
          ],
          [
            "How can we translate the analysis results into actionable insights?",
            "Are there any recommendations or strategies derived from the data insights?",
            "Can we identify potential opportunities or risks based on the insights?",
            "What steps should be taken to implement the insights into decision-making processes?",
            "How do we ensure continuous learning and improvement from the insights gained?",
          ],
        ],
        [
          [
            "Which criteria should we consider when choosing a suitable model for the dataset?",
            "Are there any specific types of models that have shown success in similar projects?",
            "Can we compare the performance of different models before finalizing one?",
            "What trade-offs should we consider between model complexity and interpretability?",
            "How do we ensure the selected model aligns with the project objectives and constraints?",
          ],
          [
            "What is the appropriate ratio for splitting the data into training and validation sets?",
            "Should we consider any stratification techniques when splitting the data?",
            "Are there any best practices for handling imbalanced datasets during splitting?",
            "How do we prevent data leakage between the training and validation sets?",
            "Can we automate the process of data splitting to ensure consistency?",
          ],
          [
            "What training algorithms and techniques are suitable for the selected model?",
            "How many epochs and batch sizes should we use for model training?",
            "Are there any regularization methods to prevent overfitting during training?",
            "What measures can we take to monitor and optimize the model training process?",
            "Can we parallelize the training process for faster convergence?",
          ],
          [
            "Which metrics are appropriate for assessing the model's performance?",
            "Should we conduct cross-validation to ensure robust evaluation of the model?",
            "Are there any visualization techniques to interpret the model's performance?",
            "How do we compare the model's results against baseline or industry standards?",
            "Can we determine the uncertainty or confidence intervals in the model's predictions?",
          ],
          [
            "Which hyperparameters of the model are critical to optimize for better performance?",
            "Should we use grid search, random search, or Bayesian optimization for tuning?",
            "How do we prevent overfitting while tuning the hyperparameters?",
            "What strategies can we employ to speed up the hyperparameter tuning process?",
            "Can we leverage automated tools or libraries for hyperparameter optimization?",
          ],
        ],
        [
          [
            "What sections should be included in the analysis report for stakeholders?",
            "Are there any templates or formats to follow for structuring the report?",
            "How can we ensure the report highlights the key findings and recommendations?",
            "Should we include visualizations or data tables to support the analysis in the report?",
            "What level of technical detail should be present in the analysis report?",
          ],
          [
            "What key points and visuals should be included in the presentation slides?",
            "Are there any guidelines for creating engaging and informative presentation materials?",
            "How can we tailor the presentation to different audience groups or stakeholders?",
            "Should we prepare a demo or walkthrough of the analysis results in the presentation?",
            "What techniques can we use to ensure the presentation is clear and impactful?",
          ],
          [
            "What should be the main agenda items for the meeting with stakeholders?",
            "Are there any specific objectives or outcomes expected from the meeting?",
            "How can we effectively communicate the analysis results and insights to stakeholders?",
            "Should we prepare a summary or executive brief for the meeting?",
            "What strategies can we use to facilitate an interactive and productive discussion with stakeholders?",
          ],
          [
            "How can we encourage stakeholders to provide constructive feedback on the analysis?",
            "Are there any feedback channels or platforms preferred by stakeholders?",
            "What specific questions should we ask to gather relevant feedback on the analysis?",
            "How do we differentiate between actionable feedback and general comments?",
            "Can we implement a feedback loop process to incorporate suggestions for improvement?",
          ],
          [
            "What key achievements and learnings should be included in the project completion report?",
            "Are there any success metrics or KPIs to highlight in the report?",
            "How can we document the challenges faced and lessons learned during the project?",
            "Should we outline the future recommendations or next steps in the completion report?",
            "What is the preferred format or delivery method for sharing the project completion report?",
          ],
        ],
      ],
    },
  },
};

// interface IEnglishSentences {
//   occupation: string;
//   proficiency: string;
//   role: string;
//   steps: string[];
//   situations: string[][];
//   utterances: string[][][];
// }
// export { IEnglishSentences };

import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const PROMPTS: { [key: string]: ChatCompletionMessageParam[] } = {
  ask_for_english_job_sentences: [
    {
      role: "system",
      content: "너는 사용자가 영어를 학습할 수 있게 도와주는 영어 선생님이야.",
    },
    {
      role: "user",
      content:
        "사용자가 occupation(직업)과 proficiency(영어실력)를 입력할거야.\n\
        proficiency 는 4단계로 beginner, intermediate, advanced, expert 중 하나의 값을 가져.\n\
        다음 내용을 알고 싶어.\n\
        \n\
        1. role : 직업에서 맡게되는 구체적인 역할\n\
        2. mission : 이 역할이 달성해야 하는 임무\n\
        3. steps : 임무를 달성하기 위한 5가지 단계\n\
        4. situations : 각 단계에서 마주하게 되는 5가지 구체적인 상황\n\
        5. conversations : 각 상황에서 사용될 수 있는 5가지 영어 문장\n\
        \n\
        아래 예시입력과 예시응답을 알려줄게. 동일한 형식으로 답해줘.",
    },
    {
      role: "user",
      content: JSON.stringify({
        occupation: "소프트웨어 개발자",
        proficiency: "intermediate",
      }),
    },
    {
      role: "assistant",
      content: JSON.stringify({
        occupation: "소프트웨어 개발자",
        proficiency: "intermediate",
        role: "데이터 분석가",
        mission:
          "고객 이탈 예측 모델 개발 (Customer Churn Prediction Model Development)",
        steps: [
          "데이터 수집",
          "데이터 전처리",
          "데이터 분석",
          "모델 개발",
          "보고서 작성",
        ],
        situations: [
          [
            "필요한 데이터 소스 식별",
            "데이터 수집 계획 수립",
            "데이터 수집 도구 설정",
            "데이터 수집 실행",
            "데이터 품질 확인",
          ],
          [
            "데이터 정제",
            "결측치 처리",
            "이상치 처리",
            "데이터 변환",
            "데이터 스케일링",
          ],
          [
            "데이터 시각화",
            "통계 분석 수행",
            "기계 학습 모델 적용",
            "결과 해석",
            "인사이트 도출",
          ],
          [
            "모델 선택",
            "훈련 데이터와 검증 데이터 분리",
            "모델 학습",
            "성능 평가",
            "하이퍼파라미터 튜닝",
          ],
          [
            "분석 보고서 작성",
            "결과 발표 자료 제작",
            "의사 결정자와의 회의",
            "피드백 반영",
            "프로젝트 완료 보고서 작성",
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
      }),
    },
  ],
};

export default PROMPTS;

For Frontend Engineers:

 

Design and build a UI for accepting the inputs and displaying the output as stated below:
Receive requests containing the following inputs: startDate (in the format of MM/DD/YYYY) and numberOfDays (the number of calendar days to calculate cost for, starting on the startDate and including weekends).
Respond with the following outputs: totalCost.
The UI will display the result of the following “Bob’s Banana Budget” algorithm:
Every day, Bob buys a banana from the same grocery store on his way to work. At this grocery store, bananas are priced in a dynamic, yet predictable way: the first 7 days of the month, bananas cost $0.05; the second 7 days of the month, bananas cost $0.10; the third 7 days of the month, bananas cost $0.15; the fourth 7 days of the month, bananas cost $0.20; and any remaining days of the month after that, bananas cost $0.25.
Bob wants a tool built that will allow him to budget properly for any span of time. All he should need to do is provide the date for the calculation to begin and how many days to calculate (including the beginning date), and the tool should tell him how much he’ll spend during that time.
NOTE: Bob only buys bananas on his work days. You can assume he works a typical Monday-Friday work week.
 

For Fullstack Engineers:

 

Design and build a microservice (UI/DB optional) that contains one REST API endpoint. This endpoint should:
Receive requests containing the following inputs: startDate (in the format of MM/DD/YYYY) and numberOfDays (the number of calendar days to calculate cost for, starting on the startDate and including weekends).
Respond with the following outputs: totalCost.
The endpoint will determine the output by solving this “Bob’s Banana Budget” problem:
Every day, Bob buys a banana from the same grocery store on his way to work. At this grocery store, bananas are priced in a dynamic, yet predictable way: the first 7 days of the month, bananas cost $0.05; the second 7 days of the month, bananas cost $0.10; the third 7 days of the month, bananas cost $0.15; the fourth 7 days of the month, bananas cost $0.20; and any remaining days of the month after that, bananas cost $0.25.
Bob wants a tool built that will allow him to budget properly for any span of time. All he should need to do is provide the date for the calculation to begin and how many days to calculate (including the beginning date), and the tool should tell him how much he’ll spend during that time.
NOTE: Bob only buys bananas on his work days. You can assume he works a typical Monday-Friday work week.
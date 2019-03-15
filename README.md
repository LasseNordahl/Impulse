## Impulse, HackTech 2019 Project Repository

Winner of the Most Aesthetic/Well-Designed award!

# Project

When we open our email, we see emails that originate from internship applications we filed months ago. Applications that we don't even remember. Attempting to track this type of work manually is exhausting as well. We wanted to fix this problem so we went out to build an app that automates this process for us and does all the heavy work load. Impulse allows users to easily access all their applications in a visually appealing setting and lists in chronological order of companies applied to, position applied for, content of the email, and stage of the application.

# What it does

Impulse uses Google's gmail API to authenticate with a person's email and it tracks which emails are from internship applications. It then loads these emails into a database where it shows information on each email, including company name, logo, status, content of the email, and the time line. Additionally, if a company sends another email, it overwrites the existing entry in the database to accurately reflect the new email and showcases the time line changes.


# How we built it

Our team built it using React for the front-end and node.js for the back-end.

For the front-end we used React material UI component library to implement our design and to deliver a pleasant user experience.

For the back-end we used node.js and started by getting the authentication (oAuth2) working with gmail, parsing through each email, and then analyzing each email and putting it into a category depending on the content stored in the email.


[Devpost](https://devpost.com/software/impulse-kuwe0b)
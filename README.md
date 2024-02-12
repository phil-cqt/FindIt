# Blogging application - ECE Webtech project

Welcome to our digital publishing application created as part of the Web Technologies course during the fall semester of 2023. Our application is a versatile platform designed to showcase the knowledge and skills we acquired throughout the semester. The key features of our application include:

1. **User Authentication:** We have implemented a robust OAuth2 authentication system, allowing users to log in using external providers such as GitHub. This ensures a secure and user-friendly login experience.

2. **Content Management:** Users can create, publish, and store articles within a structured database. This feature empowers users to share their thoughts, stories, or any content they wish to showcase.

3. **Community Interaction:** To foster lively discussions and interactions, we have incorporated a commenting feature. Users can engage with posts by leaving reviews, creating a sense of community within the platform.

4. **Navigation and Accessibility:** We prioritized an intuitive and accessible interface to ensure users can easily navigate through posts and comments. A well-designed navigation system enhances the overall user experience.

5. **User Profile Customization:** Our application allows users to personalize their profiles and settings. This customization feature adds a personal touch to the user experience.

## Deliverables 

Our application is deployed on Vercel, and you can access it here:
- Vercel URL: https://ece-webtech-2023-fall-gr03-13.vercel.app

The backend is powered by Supabase, and you can explore our Supabase project here:
- Supabase project URL: https://dqmwjzzfdzjppdruxkev.supabase.co/

### Try It Locally

To explore and run our application locally, follow these steps:

- Clone the GitHub Repository:
  ```
  git clone https://github.com/RaphaelPauly/ece-webtech-2023-fall-gr03-13.git
  cd ece-webtech-2023-fall-gr03-13/app
  ```

2. Install Dependencies:
  ```
  npm install
  ```
3. Run the Application:
  ```
  npm run dev
  ```
This will start the development server, and you can access the application at http://localhost:3000.
Now you can experience our digital publishing application on your local machine!

## Authors

- *Raphaël PAULY, group 3*
- *Robin PRIVAT, group 3*

## Evaluation

### Mandatory Tasks

#### **Project management**

* **Naming convention**
  * Grade: 2 points
  * Comments: We followed the community conventions and best practices that we learned during the courses.
  * Task feedback: It was easy because we already work following this during the semester.

* **Project structure**
  * Grade: 2 points 
  * Comments: We followed what we learned during the semester to have a directory easy to understand and analyzed.
  * Task feedback: Easy because next.js is very intuitive.

* **Git usage**
  * Grade: 2 points
  * Comments: We respected the conventionnal commits using "feat", "fix", "docs", ... 
  * Task feedback: Easy to follow and better for understanding the changes.

* **Code quality**
  * Grade: 4 points
  * Comments: We used a formatter and putted in practice what we learned during the last years.
  * Task feedback: Every we do a project, we have to put a qualitative code so it was not new for us.

* **Design, UX, and content**
  * Grade: 4 points
  * Comments: We updated the layout frequently in order to have a good overall look. 
  * Task feedback: Tailwind css is very usefull to modify quickly your layout and being able to have a good user interface

#### **Application development**

* **Home page**
  * Grade: 2 points
  * Comments: We had description fo our project and a daily sentence so the home page is friendly, goodlooking and informative.
  * Task feedback: Easy to implement because it is only some paragraphs and tailwind css.

* **Navigation**
  * Grade: 2 points
  * Comments: We created a list of options and added the links for each page. We insipred ourselves from the new Netflix search bar do to something new and different from what we can see on many other websites.
  * Task feedback: This task was easy and the biggest part of it was to design it so it was satisfying

* **Login and profile page**
  * Grade: 4 points
  * Comments: Thanks to the lab 9, we were able to implement Oauth and OpenId to permit the connection of the users. We also added svg icons to login in and outin order to have a nice header.
  * Task feedback: This task is very important and we will, for sure, have to use Oauth and OpenID in the future so it was nice to learn how to create the login page and give the possibility to the user to connect himself through platform like github, google, apple,...

* **Post creation and display**
  * Grade: 6 points
  * Comments: Authenticated users can write article, on another page with different properties. We added the possibility to cancel or save the form. We also display the page's posts and the list is paginated and sorted by creation date. 
  * Task feedback: It was the central part of the project and we have done it well. 

* **Comment creation and display**
  * Grade: 4 points
  * Comments: We reused the code of the post creation and display's task in order to be able to comment each post. We also add to add a link between article and reviews to be able to know which post a comment talk about. To do this we add the id of the post in the comment table.
  * Task feedback: The task was easy because we already work on a form for the post's task and we just add to change the content and some little details.

* **Post modification and removal**
  * Grade: 4 points
  * Comments: We added two buttons, one to edit the post and the other to delete it. To edit the post, we push the user on the new article form that is already filled with the content of the post i want to modify and save it into the database. To delete the post, we delete the post in the database with the id corresponding to the article. We just add to check if the user is connected and if he is the one who post the article to display the two buttons.
  * Task feedback: I was an easy and fast task to do. After doing this, we were very confortable with the use of a database.

* **Search**
  * Grade: 6 points
  * Comments: We created a search bar the user can search for a post and we use the search capabilities of supabase.
  * Task feedback: Easy to implement, we just have to change the resquest for the database depending on what is written in the bar. But we didn't manage to add multiple condition on the search such as category and tags.

* **Use an external API**
  * Grade: 2 points
  * Comments: We used an external API to get randomquotes and then display them on the home page: https://github.com/arnellebalane/random-quotes. Here is the command to install it:
    ```
    npm install --save random-quotes
    ```
  * Task feedback: This task was easy to implement and add to our project. This brings a little extra to our project.

* **Resource access control**
  * Grade: 6 points
  * Comments: We used RLS to secure our database.
  * Task feedback: It was easy to implement because it is very intuitive.

* **Account settings**
  * Grade: 4 points
  * Comments: we create a page so the user can manage his information. He can change his name and laguage and save it. If he logs in late, he will be able to find back his information.
  * Task feedback: This task was a little bit hard because we add to create another table linked with a key to the auth table in order to add information for the users.

* **WYSIWYG integration**
  * Grade: 2 points
  * Comments: We added WYSIWYG so the users can edit their post. To do that, we used the open source rich text editor: tinyMCE. Here is the command to install it:
    ```
    npm install --save @tinymce/tinymce-react
    ```
  * Task feedback: It was hard to implement because we did not know what editor to use.

* **Gravatar integration**
  * Grade: 2 points
  * Comments: We created a function that crypts the email address in SHA-256, and give the URL in return to recup teh image.
  * Task feedback: It was a little bit hard to implement because we have many lines of code and have to implement this option in different pages.

* **Light/dark mode**
  * Grade: 2 points
  * Comments: We added the darkmode class in order to change the className if it is in dark or not. The use is the same as hover: or active:. We also add svg icon to the button.
  * Task feedback: We took time to understand that we must add 'dark' in the className of the whole HTML or it does not work. It was long to find and implement all the colors for text, background or border...

### Bonus Tasks

* ***Active setting dashboard for the users***   
  * Grade: We would say 4 points because it was hard to implement.
  * Comments: We add to create another table with a key to the auth table and also be aware of all the RLS settings.

* ***Implement a digital version of our resume***   
  * Grade: 2 points
  * Comments: the about us page shows the creators of the website. We though it was a good idea to implement our resume to have a wider idea of who we are.

## Miscellaneous

### Course Feedback

It was a very nice course, the labs are well explained and the course material is good. The project is very good for putting into practice everything we have learned and it is at this moment that we encounter the potential of what we are doing. We appreciate the well-structured labs that guided us through the process of building our project incrementally. This approach allowed us to comprehend each part independently, fostering a deeper understanding of various web technologies.

### Project Reuse

- We authorize the professors to use our project as an example for the next year students.
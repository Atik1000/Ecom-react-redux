	
React js Final Project

This is our final project through which we will be able to demonstrate our understanding of reactJS throughout our course. The requirements are described below. We will be implementing those gradually.


1. This is an e-commerce application with a user login feature.
2. There will be several pages:

Home Page: Where product list will be shown
Product Detail Page: Where detail of a particular product will be shown.
Cart:  All the product user has added will be shown in this page.
Login: A view to allow user to login
Dashboard: An admin can login to this dashboard to 

see all the order list, change order status from pending to done or rejected. 
See all the user list. Edit user information .
all pending cart along with user information



Flow


User:

When a user comes to this site, on the home page, there will be a showcase of all products with pagination. User can see product details by clicking on the product where he will have the option to add to cart the product with a different amount. But, no user without logging in can not add product to cart. So if a user clicks add to cart without login, will be redirected to login. During this time, the clicked product will be stored in Localstorage and when successfully logged in, the product will be added to cart.

Each time the user add product to cart, an API request will be sent to add t cart and in return API will response with the cart details along with added product.

In user's profile page, user can update profile information and also see the order status which is already made by the user. Will have the ability to cancel the Order.


The product page will have search and filtering option through which user can search a particular product and filter by category.


Admin:

An admin will login in to the dashboard . There admin can check the all orders, pending orders, Successfull orders and Rejected orders. Orders can be filtered by Data and status. Admin will have the option to change order status, block a user. Admin can add, delete and update Category, product.

N.B: 

This project should have a finalized UI and UX just like a finished product. The API is already deployed to github and will be demonstrated to class. 

The requirements can be changed on the fly to cope up with real-time project environment
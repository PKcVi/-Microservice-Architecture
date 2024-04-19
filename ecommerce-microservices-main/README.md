# E-commerce Microservices Project

## Overview

The E-commerce Microservices Project is a modern and scalable e-commerce platform developed using the MERN stack with a microservices architecture. The platform aims to deliver a seamless and personalized shopping experience, incorporating features such as user authentication, real-time inventory management, and recommendation engines.

### Key Features

- **User Authentication:** Secure user authentication and account management.
- **Product Catalog:** Display of products with basic details and individual product details.
- **Shopping Cart and Checkout:** Add/remove items, proceed to checkout, and provide shipping information.
- **Payment Processing:** Secure payment processing using simulated payment gateways.
- **Inventory Management:** Real-time product availability updates and low-stock alerts.
- **Microservices Architecture:** Modular and scalable design for independent development and deployment.

## Priority User Stories

1. **Seamless Product Discovery:**
   - Users receive personalized product recommendations based on their preferences and history.
   - Recommended products are displayed on the homepage and within relevant categories.

2. **Hassle-Free Checkout and Payment:**
   - Users can add items to the cart, review orders, and securely complete the payment process.
   - Support for multiple payment methods and real-time order updates.

3. **Efficient Product Inventory Management:**
   - Vendors can manage product listings and inventory efficiently.
   - Real-time updates, low-stock alerts, and automatic marking of products as "out of stock."

## Requirements

### Product Prototype

#### User Authentication:
- Users can create accounts and log in securely.
- User data is stored safely.

#### Product Catalog:
- Display of products with basic details.
- View individual product details.
- Add products to the shopping cart.

#### Shopping Cart and Checkout:
- Add/remove items from the shopping cart.
- Proceed to checkout and provide shipping information.
- System calculates the total order amount.

#### Payment Processing:
- Make payments securely using a simulated payment gateway.
- Payment confirmation emails are sent to users.

#### Inventory Management:
- Product availability is updated in real-time when users make purchases.
- Low-stock alerts are generated for administrators.

### Minimal Project

#### User Authentication:
- Users can create accounts and log in.

#### Product Catalog:
- Display of products with basic details.

#### Shopping Cart and Checkout:
- Users can add products to a shopping cart.
- Users can proceed to checkout and provide shipping information.

### Best Case Scenario

#### Personalized Product Recommendations:
- System provides personalized product recommendations based on user history and preferences.
- Users can view and interact with recommended products.

#### User Profiles and Preferences:
- Users can update their profiles with personal information and preferences.

#### Vendor Dashboard:
- Vendors have access to a dashboard to manage product listings and inventory.

#### Performance Optimization:
- Load balancing and auto scaling implemented to handle traffic spikes.
- System optimized for fast response times.

## Architecture Overview

### User Interface (UI):
- Primary interaction point for users and vendors.
- Web and mobile interfaces for customers and vendor dashboards.

### Microservices:

#### User Authentication Microservice:
- Manages user authentication and authorization.
- Ensures secure access through user account management.

#### Product Microservice:
- Centralizes management of the product catalog.
- Provides accurate and up-to-date product information to customers.

#### Inventory Microservice:
- Handles real-time inventory management.
- Monitors and updates stock levels to prevent overselling.

#### Order Component:
- Manages order-related functionalities.
- Includes Cart (add, remove, review items) and Order (order creation, payment verification).

#### Payment Microservice:
- Securely processes payments.
- Communicates with external payment gateways.

#### Analytics Microservice:
- Collects and analyzes data to derive valuable insights.
- Includes Recommendation Engine and Optimization Engine.

### Key Architectural Concepts and Patterns

- **Microservices:** Enables independent development and deployment.
- **API Gateway:** Centralizes request routing and performs authentication and authorization checks.
- **Data Stores:** Separate databases for each microservice, ensuring data isolation and scalability.
- **Security:** Implements measures at various levels, including user authentication and data encryption.
- **Scalability:** Designed to handle scalability demands through microservices and load balancing.
- **Real-time Updates:** Inventory Microservice ensures real-time inventory updates and alerts.
- **Analytics:** Collects and analyzes data for valuable insights.

## Environment Setup

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account
- Docker (for containerization)

### Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/navid001/ecommerce-microservices.git
   cd ecommerce-microservices 
   
1. **Install Dependencies for the Client:**

    - In the client directory
        ```bash 
        npm install 
1. **Install Dependencies for the Server:**

    - In the server directory
        ```bash
        npm install

1. **Set Up MongoDB Atlas:**

    - Create a MongoDB Atlas account.
    - Create a cluster and obtain the connection string.
1. **Set Up Environment Variables:**

    - In the root directory, create a .env file.
    - Add the following content:
        ```bash
        MONGO_URI=your_mongo_connection_string

1. **Build and Run the Project:**
    ```bash
    # In the root directory
    docker-compose up --build

1. **Access the Application:**

    - Open your browser and navigate to `http://localhost:3000` for the client.
    - API routes are available at `http://localhost:5000`.
## Microservices Specific Requirements
- Docker Setup
- Dockerfiles are provided for each microservice.
- Docker Compose is configured for local testing.
## Task Specific Requirements
- Implemented user stories align with the project requirements.
- Additional functionality may be added, discussed in the reflections document.

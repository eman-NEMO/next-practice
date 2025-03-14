# 📌Project Description

This is a responsive Products Gallery website built with Next.js and Tailwind CSS. It fetches product data from the Fake Store API and displays a list of products, along with detailed information for each product. The app supports dynamic routing for product details and is fully responsive.

## 🚀 Live Demo

Live Demo Link (https://next-practice-rho-coral.vercel.app/)


## 🛠 Tech Stack

Next.js - React framework for server-side rendering and static site generation.

Tailwind CSS - Utility-first CSS framework for styling.

Axios - Fetching data from the Fake Store API.

## 📥 Installation & Running the Project Locally

### 1️⃣ Clone the repository:

git clone https://github.com/eman-NEMO/next-practice.git
cd products-gallery

### 2️⃣ Install dependencies:

npm install  

### 3️⃣ Start the development server:

npm run dev  

🔹 Open http://localhost:3000 in your browser to see the app



## 📌 Features

### ✅ Products Page

Fetches products from the Fake Store API.

Displays name, image, price, and short description.

Styled with Tailwind CSS for a clean UI.

### ✅ Product Details Page

Clicking a product navigates to its details page (e.g., /products/[id]).

#### Displays full product details:

Name

Image

Full description

Price

Category

Uses Next.js dynamic routing.

##  Additional Enhancements


⏳ Loading States: Displays a spinner while fetching data.

📱 Responsive Design: Optimized for mobile and desktop views.

### 🔗 API Reference

Fetch all products: GET https://fakestoreapi.com/products

Fetch product by ID: GET https://fakestoreapi.com/products/{id}


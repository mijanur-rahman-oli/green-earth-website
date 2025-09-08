<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tree Shop</title>
  <script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#CFF0DC]">



  <!-- Main Section -->
  <section class="w-11/12 mx-auto grid grid-cols-12 gap-4 py-10">
    <!-- Categories -->
    <aside class="col-span-2">
      <h1 class="pb-6 font-bold text-lg">Categories</h1>
      <ul id="categoryContainer" class="space-y-1"></ul>
    </aside>

    <!-- Trees -->
    <div id="treesContainer" class="col-span-7 grid grid-cols-3 gap-6"></div>

    <!-- Cart -->
    <aside class="col-span-3">
      <h1 class="pb-6 font-bold text-lg">Your Cart</h1>
      <ul id="cartList" class="space-y-2"></ul>
      <p class="font-semibold mt-4">Total: <span id="totalPrice">0</span>৳</p>
    </aside>
  </section>

  <script src="app.js"></script>
</body>
</html>

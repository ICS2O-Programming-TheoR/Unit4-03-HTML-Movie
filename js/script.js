// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function submitUserAge() {
  const userAge = parseInt(document.getElementById("age-info").value);
  const result = document.getElementById("movie-type");

  if (userAge <= 0) {
    result.innerHTML = "Please enter a valid age.";
  }
  
  else if (userAge >= 17) {
    result.innerHTML = "You can see an R rated movie by yourself.";
  }
  
  else if (userAge >= 13) {
    result.innerHTML = "You can see a PG-13 movie by yourself.";
  }

  else if (userAge >= 8) {
    result.innerHTML = "You can see a PG movie by yourself.";
  }

  else if (userAge >= 1) {
    result.innerHTML = "You can not see any movies by yourself."
  }
}
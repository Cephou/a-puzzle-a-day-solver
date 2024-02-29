<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/icons.css" />
  <link rel="stylesheet" href="css/colors.css" />
  <link rel="stylesheet" href="css/grid.css" />
  <title>Sudoku Solver</title>
</head>
<body>
  <div id="app">
    <div class="sudoku">
      <div v-for="cell in tetris" class="case"><!--  :class="'cluster-' + cell.cluster" -->
        <div class="case-value" :class="((cell.value == '') ? 'case-empty' : '') + ' ' + cell.filled_by[0]">{{ cell.value }}</div>
    </div>
  </div>
</body>
</html>
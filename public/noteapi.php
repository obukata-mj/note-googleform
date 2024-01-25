<?php
  $note_creator  = 'mjtestnote';
  $json = file_get_contents("https://note.com/api/v2/creators/{$note_creator}/contents?kind=note&page=1");
  $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
  echo $json;
?>
(function($, window) {
    $(function() {
        // この中に処理を書きます
        // 課題 1.jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみる
        $('h2').remove();
        
		// 課題 2.#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみる
		$('#index').find('li').eq(1).text();
		$('#index').find('li').eq(2).html();
        
		// 課題 3.子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみる
		// append() で各要素に引数で指定したパラメーターを追加する
		$('button').click(function() {
		    $('#index').append('<li>メソッド</li>');
		});
        
		// 課題 4.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみる
		$('button').click(function() {
			$('#index').find('li').each(function() {
				alert($(this).text().length);
			});
		});
		
		// 課題 5. 4.でalertではなく、各文字列の最後にその長さを追加してみる。例：jQueryのはじめ方[11文字]
		$('button').click(function() {
			$('#index').find('li').each(function() {
				$(this).append(" ["+ $(this).text().length +"文字]");
			});
		});
		
    });
    
})(jQuery, window);


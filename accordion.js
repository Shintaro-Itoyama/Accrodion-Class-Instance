(() => {//即時関数

	class Accordion {
		
		//初期化コンストラクタ
		constructor(obj){

			console.log('obj', obj.hookName);

            //DOM要素を取得する。＄はDOM要素であることを表す。
			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;

            console.log("triggerLen", triggerLen);
            console.log("$trigger", $trigger);

			let index = 0;
			while (index < triggerLen) {
                //クラスの中で関数を呼び出し指定する場合は、thisを付けないといけない。
                //this = クラスそのものを参照する。
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));	
				index++;
			}
		}



        //クリックしたら実行される処理
		clickHandler(e){
            //クリックして動作するイベントを殺す。Aタグ対策
			e.preventDefault();
            
			const $target = e.currentTarget;

            //accordion-trrigerの次の要素＝accordion-contentsを取得
			const $content = $target.nextElementSibling;
			
			if($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display ='block';
			}
		}
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a'
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt'
	});





})();
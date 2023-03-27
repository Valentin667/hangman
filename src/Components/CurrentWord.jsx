import React from 'react';

const HIDENWORD = '❓';

const CurrentWord = ({currentWord, usedLetter, point}) => {

	return (
		<div id="currentWord">

			{
				currentWord.split('').map(
					(letter, key) => {
							
						let status = "finded"
						// on change la class status si existe
						if (usedLetter.indexOf(letter) === -1) {

							if (point === -1) {
								status = "lost"
							} 
							else {
								status = 'notfinded'
							}
						}

						// chaque lettre splitéé dans un span
						return <span
							key={"letter_ " + key}
							className={status}
							>
							{status === "finded" ? letter :(
								status === "lost" ? '😔' : HIDENWORD
							) }						
						</span>
				})
			}

		</div>
	);

}



export default CurrentWord;
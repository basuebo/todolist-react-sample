import React from 'react';
import './style.css';

export const App = () => {
	return (
  	<div className="container">
    		<h2>TodoList with React</h2>
    		<div className="input-area">
      			<input id="input-task" type="text" value="" placeholder="タスクを入力" />
      			<button id="add-button">追加</button>
    		</div>
	    	<div className="tasks">
      			<ul id="tasks-list">
        			<li>プログラミング言語の勉強
          				<span>
            					<button className="complete-button">済</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
        			<li>プログラムを作る
          				<span>
            					<button className="complete-button">済</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
        			<li>Githubにコミットする
          				<span>
            					<button className="complete-button">済</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
      			</ul>
    		</div>
		<div className="complete">
      			<p className="complete-header">完了</p>
      			<ul id="complete-list">
        			<li>プログラミング言語の勉強
          				<span>
            					<button className="undo-button">戻</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
        			<li>プログラムを作る
          				<span>
            					<button className="undo-button">戻</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
        			<li>Githubにコミットする
          				<span>
            					<button className="undo-button">戻</button>
            					<button className="delete-button">消</button>
          				</span>
        			</li>
      			</ul>
    		</div>
	</div>
	);
};


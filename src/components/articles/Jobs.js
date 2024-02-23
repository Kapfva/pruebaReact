import React from "react";

import Article from "@layouts/Article";
import jobs from "@assets/2020-explab.pdf";

// document.oncontextmenu = function(){return false}

const Jobs = () => {
	return (
		<div>
			<Article
				title="Trabajos Realizados"
				imgUrl="pBanner.webp"
			>
				<div className="container">
					<embed
						src={
							jobs + "#toolbar=0&navpanes=0&scrollbar=0&view=fitH,100&zoom=150"
						}
						type="application/pdf"
						width="100%"
						height="1000vh"
					/>
				</div>
			</Article>
		</div>
	);
};

export default Jobs;

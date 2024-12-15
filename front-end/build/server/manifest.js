const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about.svg","auth-banner.jpeg","ellipse.svg","favicon.ico","jumbotron.svg","logo.png","not-class.png","not-class.svg","not-found.png","not-found.svg","unknown.jpg","visi.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpeg":"image/jpeg",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.itKZqJyq.js","app":"_app/immutable/entry/app.BvFDy171.js","imports":["_app/immutable/entry/start.itKZqJyq.js","_app/immutable/chunks/entry.LQerjGIt.js","_app/immutable/chunks/37.DRwBbkdK.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/entry/app.BvFDy171.js","_app/immutable/chunks/runtime.Bp4x7A-a.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/props.DpK8ESsy.js","_app/immutable/chunks/template.DQ3Ggw9n.js","_app/immutable/chunks/utils.Cjp3hPpY.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/svelte-component.CVO9o64T.js","_app/immutable/chunks/37.DRwBbkdK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CgwM8aWo.js')),
			__memo(() => import('./chunks/1-BTjKqt4-.js')),
			__memo(() => import('./chunks/2-DiM5rhrx.js')),
			__memo(() => import('./chunks/3-jc-k9MUu.js')),
			__memo(() => import('./chunks/4-Bc_iDgd3.js')),
			__memo(() => import('./chunks/5-BxXLpLMx.js')),
			__memo(() => import('./chunks/6-C9cmjQt5.js')),
			__memo(() => import('./chunks/7-CaBVbzGE.js')),
			__memo(() => import('./chunks/8-pzlHQm4M.js')),
			__memo(() => import('./chunks/9-CfEQ5WSJ.js')),
			__memo(() => import('./chunks/10-CJEpgQzO.js')),
			__memo(() => import('./chunks/11-Dkeeaucg.js')),
			__memo(() => import('./chunks/12-Cyt8XIM6.js')),
			__memo(() => import('./chunks/13-Cwx7gtM5.js')),
			__memo(() => import('./chunks/14-CRSEKDDv.js')),
			__memo(() => import('./chunks/15-CmjFBfBj.js')),
			__memo(() => import('./chunks/16-DfmC35G8.js')),
			__memo(() => import('./chunks/17-BWkQoSJ9.js')),
			__memo(() => import('./chunks/18-DPrMFITc.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/19-hxHn39af.js')),
			__memo(() => import('./chunks/20-SjWnMk56.js')),
			__memo(() => import('./chunks/21-MkBDfgGX.js')),
			__memo(() => import('./chunks/22-CYR2E9LK.js')),
			__memo(() => import('./chunks/23-D1F2tp6r.js')),
			__memo(() => import('./chunks/24-D1nC7iNQ.js')),
			__memo(() => import('./chunks/25-f3jiUOdH.js')),
			__memo(() => import('./chunks/26-tTy_TmiI.js')),
			__memo(() => import('./chunks/27-CSsj_MT2.js')),
			__memo(() => import('./chunks/28-fyUFm3bE.js')),
			__memo(() => import('./chunks/29-BQyn9XWf.js')),
			__memo(() => import('./chunks/30-eJuLhFIE.js')),
			__memo(() => import('./chunks/31-B93_iZ4o.js')),
			__memo(() => import('./chunks/32-vUw3-T2j.js')),
			__memo(() => import('./chunks/33-CxJDz5dl.js')),
			__memo(() => import('./chunks/34-CHR5xN9G.js')),
			__memo(() => import('./chunks/35-Dmc41uZY.js')),
			__memo(() => import('./chunks/36-BfIoq_j6.js')),
			__memo(() => import('./chunks/37-DtWW4A01.js')),
			__memo(() => import('./chunks/38-noUXPQMg.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/sign-in",
				pattern: /^\/auth\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/auth/sign-out",
				pattern: /^\/auth\/sign-out\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/auth/sign-up",
				pattern: /^\/auth\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/assignments",
				pattern: /^\/dashboard\/assignments\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/assignments/[id]",
				pattern: /^\/dashboard\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 10 },
				endpoint: __memo(() => Promise.resolve().then(function () { return _server_ts$1; }))
			},
			{
				id: "/(app)/dashboard/(users)/attachments/[id]",
				pattern: /^\/dashboard\/attachments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => Promise.resolve().then(function () { return _server_ts; }))
			},
			{
				id: "/(app)/dashboard/(users)/attachments/[id]/assignments",
				pattern: /^\/dashboard\/attachments\/([^/]+?)\/assignments\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Bq_EXiLk.js'))
			},
			{
				id: "/(app)/dashboard/(users)/classes",
				pattern: /^\/dashboard\/classes\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/classes/[id]",
				pattern: /^\/dashboard\/classes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/classes/[id]/members",
				pattern: /^\/dashboard\/classes\/([^/]+?)\/members\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CPMzSxKv.js'))
			},
			{
				id: "/(app)/dashboard/(users)/materials",
				pattern: /^\/dashboard\/materials\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/materials/[id]",
				pattern: /^\/dashboard\/materials\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/profile/edit",
				pattern: /^\/dashboard\/profile\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/quizzes",
				pattern: /^\/dashboard\/quizzes\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/quizzes/[id]",
				pattern: /^\/dashboard\/quizzes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/(users)/quizzes/[id]/start",
				pattern: /^\/dashboard\/quizzes\/([^/]+?)\/start\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 17 },
				endpoint: __memo(() => import('./chunks/_server.ts-DiYY6dw0.js'))
			},
			{
				id: "/(app)/dashboard/teachers",
				pattern: /^\/dashboard\/teachers\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/assignments",
				pattern: /^\/dashboard\/teachers\/assignments\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/assignments/create",
				pattern: /^\/dashboard\/teachers\/assignments\/create\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/assignments/[id]",
				pattern: /^\/dashboard\/teachers\/assignments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 22 },
				endpoint: __memo(() => import('./chunks/_server.ts-CBuMXvMP.js'))
			},
			{
				id: "/(app)/dashboard/teachers/assignments/[id]/edit",
				pattern: /^\/dashboard\/teachers\/assignments\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/attachments/[id]",
				pattern: /^\/dashboard\/teachers\/attachments\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-QeFI41IX.js'))
			},
			{
				id: "/(app)/dashboard/teachers/classes",
				pattern: /^\/dashboard\/teachers\/classes\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/classes/create",
				pattern: /^\/dashboard\/teachers\/classes\/create\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/classes/[id]",
				pattern: /^\/dashboard\/teachers\/classes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 26 },
				endpoint: __memo(() => import('./chunks/_server.ts-D6fMb79P.js'))
			},
			{
				id: "/(app)/dashboard/teachers/classes/[id]/edit",
				pattern: /^\/dashboard\/teachers\/classes\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/classes/[id]/members",
				pattern: /^\/dashboard\/teachers\/classes\/([^/]+?)\/members\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-6y263Znq.js'))
			},
			{
				id: "/(app)/dashboard/teachers/materials",
				pattern: /^\/dashboard\/teachers\/materials\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/materials/create",
				pattern: /^\/dashboard\/teachers\/materials\/create\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/materials/[id]",
				pattern: /^\/dashboard\/teachers\/materials\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 30 },
				endpoint: __memo(() => import('./chunks/_server.ts-Dy3WaB3_.js'))
			},
			{
				id: "/(app)/dashboard/teachers/materials/[id]/edit",
				pattern: /^\/dashboard\/teachers\/materials\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/quizzes",
				pattern: /^\/dashboard\/teachers\/quizzes\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/quizzes/create",
				pattern: /^\/dashboard\/teachers\/quizzes\/create\/?$/,
				params: [],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/quizzes/[id]",
				pattern: /^\/dashboard\/teachers\/quizzes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 34 },
				endpoint: __memo(() => import('./chunks/_server.ts-D5jCYZ39.js'))
			},
			{
				id: "/(app)/dashboard/teachers/quizzes/[id]/answers",
				pattern: /^\/dashboard\/teachers\/quizzes\/([^/]+?)\/answers\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Bl8so6er.js'))
			},
			{
				id: "/(app)/dashboard/teachers/quizzes/[id]/edit",
				pattern: /^\/dashboard\/teachers\/quizzes\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard/teachers/quizzes/[id]/questions",
				pattern: /^\/dashboard\/teachers\/quizzes\/([^/]+?)\/questions\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-UtwfI34K.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

var _server_ts$1 = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var _server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null
});

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

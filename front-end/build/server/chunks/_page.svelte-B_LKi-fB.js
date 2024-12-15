import { o as head, p as pop, b as push, d as attr } from './index2-JzpfwCt6.js';
import { B as Button, b as buttonVariants } from './button-Duyfcegt.js';
import { c as cn } from './utils-BUr2r5nE.js';
import { C as Card, a as Card_content } from './card-content-Bd8E3yV0.js';
import { R as Root, T as Trigger, S as Sheet_content, a as Sheet_header, b as Sheet_title } from './index3-E3YZIM--.js';
import { S as Separator } from './separator-CJX90iGV.js';
import { I as Icon } from './Icon-BFX92tDv.js';
import './index-BFfgIoD-.js';
import './x-C0GKGse2.js';
import './use-id-9y06sS9N.js';
import './_commonjsHelpers-B85MJLTf.js';
import './scroll-lock-ByQIsybU.js';
import './index-server-DhylklOr.js';
import './attrs-CL1THhfQ.js';
import './Icon2-CRb0pbIs.js';
import './functions-x3jG1pm5.js';

function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Eduplay</title>`;
  });
  $$payload.out += `<!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="bg-primary pb-8 pt-20"><nav${attr("class", cn("fixed left-0 top-0 z-[2] w-full py-6 transition-all [transition-property:_background-color]", "bg-transparent text-primary-foreground"))}><div class="container flex items-center justify-between gap-6"><div class="flex items-center gap-8"><a href="/" class="text-2xl font-bold">EDUPLAY</a> <div class="hidden items-center gap-3 lg:flex"><a href="/">Beranda</a> <a href="#about">Tentang Kami</a> <a href="#vision">Visi Misi</a> <a href="#features">Fitur Unggulan</a></div></div> <div class="hidden items-center gap-3 lg:flex">`;
      Button($$payload2, {
        variant: "default",
        class: "rounded-full text-primary-foreground",
        href: "/auth/sign-in",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Masuk`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        variant: "outline",
        class: "rounded-full text-slate-700",
        href: "/auth/sign-up",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Daftar`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <!---->`;
      Trigger($$payload2, {
        class: cn(buttonVariants({ variant: "ghost" }), "inline-flex lg:hidden"),
        children: ($$payload3) => {
          Icon($$payload3, { icon: "mdi:menu" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></nav> <div class="container flex grid-cols-1 flex-col-reverse items-center gap-8 md:grid md:grid-cols-2 xl:grid-cols-[60%,_1fr]"><div class="flex flex-col gap-5"><h1 class="text-center text-3xl font-bold text-primary-foreground md:text-left md:text-4xl">Belajar jadi menyenangkan dan <br class="hidden md:block">mudah untuk semua!</h1> <p class="text-center text-primary-foreground md:text-left">Platform e-learning untuk semua jenjang pendidikan. Akses materi, tugas, dan komunitas
					belajar dari mana saja.</p></div> <img src="/jumbotron.svg" alt="jumbotron"></div></div> <div id="about" class="py-12"><h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Tentang Kami</h2> <div class="container flex flex-col gap-6 md:grid md:grid-cols-[40%,_1fr] lg:grid-cols-2"><img src="/about.svg" alt="about"> <p class="text-justify text-slate-700">Kami adalah platform pembelajaran inovatif yang dirancang untuk menyederhanakan proses
				belajar-mengajar. Dengan Eduplay, guru dapat dengan mudah membagikan materi, memberikan
				tugas, dan membuat kuis online. Sementara itu, siswa dapat mengakses materi pembelajaran
				kapan saja dan di mana saja. Kami berkomitmen untuk menciptakan pengalaman belajar yang
				lebih efektif dan menyenangkan bagi semua.</p></div></div> <div id="vision" class="bg-primary/10 py-12"><h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Visi Misi</h2> <div class="container grid grid-cols-1 gap-6 lg:grid-cols-2"><div class="flex grid-cols-2 flex-col gap-4 md:grid lg:flex"><!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<h3 class="mb-4 text-xl font-semibold text-primary">Visi</h3> <p class="text-slate-700">Menjadi platform pembelajaran yang paling efisien dan mudah digunakan, menghubungkan
							guru dan siswa dalam proses belajar-mengajar yang efektif.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<h3 class="mb-4 text-xl font-semibold text-primary">Misi</h3> <ul class="list-disc space-y-2 pl-4 text-slate-700"><li>Menyederhanakan proses pengiriman materi dan tugas bagi guru.</li> <li>Memudahkan siswa dalam mengakses materi pembelajaran kapan saja dan di mana saja.</li> <li>Meningkatkan kualitas pembelajaran dengan menyediakan berbagai fitur pendukung,
								seperti kuis online.</li></ul>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <img src="/visi.svg" alt="about" class="row-start-1 mx-auto lg:col-start-2 lg:ml-auto"></div></div> <div id="features" class="py-12"><h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Fitur Unggulan</h2> <div class="container grid grid-cols-1 gap-6 lg:grid-cols-2"><!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:currency-usd-off",
                class: "mb-3 text-6xl text-emerald-600"
              });
              $$payload4.out += `<!----> <h3 class="mb-4 text-xl font-semibold text-emerald-600">Platform gratis</h3> <p class="text-slate-700">Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:check",
                class: "mb-3 text-6xl text-blue-600"
              });
              $$payload4.out += `<!----> <h3 class="mb-4 text-xl font-semibold text-blue-600">Mudah digunakan</h3> <p class="text-slate-700">Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:access-point",
                class: "mb-3 text-6xl text-red-600"
              });
              $$payload4.out += `<!----> <h3 class="mb-4 text-xl font-semibold text-red-600">Dapat diakses dimana saja</h3> <p class="text-slate-700">Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              Icon($$payload4, {
                icon: "mdi:puzzle",
                class: "mb-3 text-6xl text-yellow-600"
              });
              $$payload4.out += `<!----> <h3 class="mb-4 text-xl font-semibold text-yellow-600">Integrasi dalam satu genggaman</h3> <p class="text-slate-700">Eduplay menawarkan platform belajar-mengajar yang 100% gratis bagi guru dan murid
						sehingga dapat diakses oleh semua kalangan.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div> <div class="bg-primary/10 py-12"><div class="container"><h2 class="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Semua kegiatan belajar-mengajar dalam satu genggaman</h2> <div class="flex justify-center">`;
      Button($$payload2, {
        class: "rounded-full px-12",
        href: data.user ? "/dashboard" : "/auth/sign-in",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Ayo bergabung sekarang`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></div> <footer class="bg-slate-800 py-3"><p class="text-center text-slate-200">Made with ❤️ By Eduplay</p></footer> <!---->`;
      Sheet_content($$payload2, {
        side: "left",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Sheet_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Sheet_title($$payload4, {
                class: "text-left",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Menu`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Separator($$payload3, { class: "my-4" });
          $$payload3.out += `<!----> <div class="flex flex-col gap-6"><div class="flex flex-1 flex-col gap-3"><a href="/">Beranda</a> <a href="#about">Tentang Kami</a> <a href="#vision">Visi Misi</a> <a href="#features">Fitur Unggulan</a></div> `;
          Separator($$payload3, {});
          $$payload3.out += `<!----> <div class="flex flex-col gap-3">`;
          if (data.user) {
            $$payload3.out += "<!--[-->";
            Button($$payload3, {
              href: "/dashboard",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Dashboard`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
            Button($$payload3, {
              variant: "outline",
              href: "/auth/sign-in",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Masuk`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Button($$payload3, {
              href: "/auth-sign-up",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Daftar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          }
          $$payload3.out += `<!--]--></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B_LKi-fB.js.map

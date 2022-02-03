/**
 * アニメーションのセッティング
 */

const observeAnimation = () => {

  // animatedクラスを持つエレメントを取得
  const targetElements = document.querySelectorAll(".animated");

  // animatedクラスがなければ終わり
  if (!targetElements.length) return;

  // 発火した時の処理data-animated属性をtrueに
  const handleObserve = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-animated", "true");
      }
    });
  };

  // IntersectionObserverのオプション設定
  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px",
    threshold: 0
  };

  // IntersectionObserver
  const observer = new IntersectionObserver(handleObserve, observerOptions);

  // animatedクラスを持つエレメントの処理
  targetElements.forEach((target) => {

    // data-animated属性をセット
    target.setAttribute("data-animated", "false");

    // IntersectionObserverをエレメントにセット
    observer.observe(target);

  });

};

// ぺージロード時に処理させる
document.addEventListener("DOMContentLoaded", observeAnimation, false);

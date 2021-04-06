import React, { Component } from "react";

export default class TopPageContent extends Component {
  render() {
    return (
      <section class="hero is-fullheight-with-navbar has-background-warning-light">
        <div class="hero-body">
          <div class="container has-text-centered">
            <img class="is-rounded" src={process.env.PUBLIC_URL + '/doge.png'} width="200"height="200" />
            <p class="title">ตามหาผู้รับฝากสุนัขบริเวณใกล้ๆ</p>
            <button class="button is-warning">
              <strong>หาเลย</strong>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

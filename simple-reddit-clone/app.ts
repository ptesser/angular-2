// your code goes here

/**
* A basic reddit Angular 2 app
*
* @author Paolo Tesser
*
* @note The declarations order of the class is important if you work with a single file @link http://stackoverflow.com/questions/39001294/unexpected-value-anycomponent-declared-by-the-module-appmodule
*/


import {
    NgModule,
    Component
} from '@angular/core';

import { BrowserModule }            from '@angular/platform-browser';
import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';


/**
 * Model of an article
 * 
 * @class Article
 */
class Article {
    /**
     * 
     * 
     * @type {number}
     */
    votes:  number;
    /**
     * 
     * 
     * @type {string}
     */
    link:   string;
    /**
     * 
     * 
     * @type {string}
     */
    title:  string;

    /**
     * Creates an instance of Article.
     * 
     * @param {string} title
     * @param {string} link
     * @param {number} [votes]
     */
    constructor(title: string, link: string, votes?: number) {
        this.title  = title;
        this.link   = link;
        this.votes  = votes || 0;
    }

    /**
     * 
     */
    voteUp(): void {
        this.votes++;
    }

    /**
     * 
     */
    voteDown(): void {
        this.votes--;
    }

    /**
     * 
     * 
     * @returns {string}
     */
    domain(): string {

        try{
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        }catch(err){
            return null;
        }

    }

}

/* ================================================= */


/**
 * 
 * 
 * @class ArticleComponent
 */
@Component({
    selector:   'reddit-article',
    host:       {
        class: 'row'
    },
    inputs:     ['article'],
    template: `
    <div class="four wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{ article.votes }}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    
    <div class="twelve wide column">
        
        <a class="ui large header" href="{{ article.link }}" target="_blank">{{ article.title }}</a>
        <div class="meta">{{ article.domain() }}</div>

        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                    upvote
                </a>
            </li>
            
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow down icon"></i>
                    downvote
                </a>
            </li>
        </ul>
    </div>
    `

})

class ArticleComponent {
    
    /**
     * 
     * 
     * @type {Article}
     */
    article: Article;

    /**
     * 
     * 
     * @returns {boolean}
     */
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    /**
     * 
     * 
     * @returns {boolean}
     */
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}

/* ================================================= */

/**
 * 
 * @class RedditApp
 */
@Component({
    selector: 'reddit',
    template: `
    <div class="ui main text container">
        <form class="ui large form segment">
            <h3 class="ui header">Add a link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle>
            </div>

            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink>
            </div>

            <button 
                (click)="addArticle(newtitle, newlink)"
                class="ui positive right floated button">
                Submit link
            </button>
        </form>

        <div class="ui grid posts">
            <reddit-article *ngFor="let article of articles" [article]="article"></reddit-article>
        </div>

    </div>
    `
})

class RedditApp {

    /**
     * 
     * 
     * @type {Array<Article>}
     */
    articles: Array<Article>; // generics

    /**
     * Creates an instance of RedditApp.
     * 
     */
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }

    /**
     * 
     * 
     * @param {HTMLInputElement} newTitle
     * @param {HTMLInputElement} newLink
     * @returns
     */
    addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement){
        console.log(`Adding article title: ${newTitle.value} and link: ${newLink.value}`);
        
        this.articles.push(new Article(newTitle.value, newLink.value, 0));
        
        newTitle.value  = '';
        newLink.value   = '';

        return false;
    }

}
/* ================================================= */


/**
 * 
 * 
 * @class RedditAppModule
 */
@NgModule({
    declarations:   [ RedditApp, ArticleComponent ],
    imports:        [ BrowserModule ],
    bootstrap:      [ RedditApp ],
})

class RedditAppModule { }

platformBrowserDynamic().bootstrapModule(RedditAppModule);
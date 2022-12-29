import { Link } from 'react-router-dom';
import Profile from '../profile/Profile';
import './Post.css';
import Subscribe from './subscribe/Subscribe';
import FooterNav from './footerNav/FooterNav';

function Post(){
    return (<>
        <Main />
        <Subscribe />
        <div className='footer-titke'>
            <h3><Link to={'/'}>Overreacted</Link></h3>
        </div>
        <Profile />
        <FooterNav />
    </>);
}

function Main(){
    return (<main>
        <article>
            <header>
                <h1 >npm audit: Broken by Design</h1>
                <small>July 7, 2021 • ☕️☕️☕️ 14 min read</small>
            </header>
            <div className='post-content'>
                <p>Security is important. Nobody wants to be the person advocating for less security. So nobody wants to say it. But somebody has to say it.</p>
                <p>So I guess I’ll say it.</p>
                <p><strong>The way <code className="language-text">npm audit</code> works is broken. Its rollout as a default after every <code className="language-text">npm install</code> was rushed, inconsiderate, and inadequate for the front-end tooling.</strong></p>
                <p>Have you heard the story about <a href="https://en.wikipedia.org/wiki/The_Boy_Who_Cried_Wolf" target="_blank" rel="nofollow noopener noreferrer">the boy who cried wolf?</a> Spoiler alert: the wolf eats the sheep. If we don’t want our sheep to be eaten, we need better tools.</p>
                <p>As of today, <code className="language-text">npm audit</code> is a stain on the entire npm ecosystem. The best time to fix it was before rolling it out as a default. The next best time to fix it is now.</p>
                <p>In this post, I will briefly outline how it works, why it’s broken, and what changes I’m hoping to see.</p>
                <hr />
                <p><em>Note: this article is written with a critical and somewhat snarky tone. I understand it’s super hard to maintain massive projects like Node.js/npm, and that mistakes may take a while to become become apparent. I am frustrated only at the situation, not at the people involved. I kept the snarky tone because the level of my frustration has increased over the years, and I don’t want to pretend that the situation isn’t as dire as it really is. Most of all I am frustrated to see all the people for whom this is the first programming experience, as well as all the people who are blocked from deploying their changes due to irrelevant warnings. I am excited that <a href="https://twitter.com/bitandbang/status/1412803378279759872" target="_blank" rel="nofollow noopener noreferrer">this issue is being considered</a> and I will do my best to provide input on the proposed solutions! 💜</em></p>
                <hr/>
                <h2 id="how-does-npm-audit-work">How does npm audit work?</h2>
                <p><em><a href="#why-is-npm-audit-broken">Skip ahead</a> if you already know how it works.</em></p>
                <p>Your Node.js application has a dependency tree. It might look like this:</p>
                <div className="gatsby-highlight" data-language="text">
                    <pre className="language-text">
                        <code className="language-text">{`your-app
                    - view-library@1.0.0
                    - design-system@1.0.0
                    - model-layer@1.0.0
                        - database-layer@1.0.0
                        - network-utility@1.0.0`}
                        </code>
                    </pre>
                </div>
                <p>Beginners, experienced developers, maintainers, security departments, and, most importantly — our users — deserve better.</p>
                <p><a href="https://mobile.twitter.com/search?q=https%3A%2F%2Foverreacted.io%2Fnpm-audit-broken-by-design%2F" target="_blank" rel="noopener noreferrer">Discuss on Twitter</a> • <a href="https://github.com/gaearon/overreacted.io/edit/master/src/pages/npm-audit-broken-by-design/index.md" target="_blank" rel="noopener noreferrer">Edit on GitHub</a></p>
            </div>

        </article>
    </main>);
}

export default Post;
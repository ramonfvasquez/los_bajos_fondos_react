import '../styles/components/pages/ElencoPage.css';

const ElencoPage = () => {
    const elenco = [
        {
            nombre: 'Actor 1',
            personaje: 'Personaje 1',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 2',
            personaje: 'Personaje 2',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 3',
            personaje: 'Personaje 3',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 4',
            personaje: 'Personaje 4',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 5',
            personaje: 'Personaje 5',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 6',
            personaje: 'Personaje 6',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 7',
            personaje: 'Personaje 7',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 8',
            personaje: 'Personaje 8',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 9',
            personaje: 'Personaje 9',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
        {
            nombre: 'Actor 10',
            personaje: 'Personaje 10',
            cv: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor odio eros, ac tempus lacus viverra id. Donec finibus metus lorem, non facilisis ipsum cursus eget. Nullam et lacus nulla. Phasellus eu lacus elit. Aenean mollis volutpat ligula, sed dignissim magna tincidunt vitae. Nulla sit amet nisl augue. Nullam mollis nulla justo, convallis semper nunc facilisis eget. Sed sed euismod dolor. Fusce a feugiat dui. Praesent maximus tellus ut nibh tristique, ut pellentesque justo mattis. In hac habitasse platea dictumst. Mauris non velit rutrum, dignissim velit in, cursus ante.
            Sed sodales odio bibendum odio porttitor, vel aliquam justo pretium. Ut tempus a elit ac faucibus. Praesent lectus sapien, feugiat quis porttitor ac, aliquam tincidunt est. Nulla facilisi. Cras non volutpat nunc. Cras elementum diam a nunc porta lacinia vel eget enim. Nam nisi velit, rutrum dapibus nunc at, tempor interdum ipsum. Donec congue mi quis velit suscipit tincidunt. Proin vehicula iaculis luctus. Aenean sagittis, ipsum eget bibendum luctus, ex turpis mattis urna, in molestie arcu massa et libero. Integer luctus velit nunc, nec scelerisque ligula vestibulum eu. In eget augue ornare, bibendum nisi nec, congue massa. Ut aliquet est quis pharetra consequat.`
        },
    ]   

    return (
        <div className='section-container'>
            <div className='elenco-container'>
                <h1>Elenco</h1>
                <ul className='elenco-list'>
                    {elenco.map((actor) => (
                        <li key={actor.nombre.toLowerCase().replace(' ', '')} className='actor'>
                            <h2>{actor.nombre}</h2>
                            <h4>{actor.personaje}</h4>
                            <img src={require('../images/fotos/elenco/actor001.jpg').default} alt='' />
                            <p>{actor.cv}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ElencoPage;

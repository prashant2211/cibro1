import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import SEO from '../components/SEO';

const Gallery = () => {
  const { language } = useLanguage();
  const [playingVideo1, setPlayingVideo1] = useState(false);
  const [playingVideo2, setPlayingVideo2] = useState(false);
  const [playingVideo3, setPlayingVideo3] = useState(false);
  const [playingVideo4, setPlayingVideo4] = useState(false);
  const [mutedVideo1, setMutedVideo1] = useState(true);
  const [mutedVideo2, setMutedVideo2] = useState(true);
  const [mutedVideo3, setMutedVideo3] = useState(true);
  const [mutedVideo4, setMutedVideo4] = useState(true);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const youtubePlayer1Ref = useRef(null);
  const youtubePlayer2Ref = useRef(null);
  const youtubePlayer3Ref = useRef(null);
  const youtubePlayer4Ref = useRef(null);

  // YouTube Video IDs
  const youtubeVideoIds = [
    'aBY8LJQmyh4', // HomePage video ID
    'KSUq_V0MCdA', // HomePage1 video ID
    '13PTTsJAiLE', // Video 3
    'Pd4eV-Asi-g'  // Video 4
  ];

  // Initialize YouTube players
  const initializeYouTubePlayers = () => {
    if (!window.YT || !window.YT.Player) {
      // Load YouTube API if not already loaded
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        // Set up callback for when API is ready
        window.onYouTubeIframeAPIReady = () => {
          initializePlayers();
        };
      }
      return;
    }

    initializePlayers();
  };

  const initializePlayers = () => {
    // Initialize player 1
    if (video1Ref.current && !youtubePlayer1Ref.current && window.YT && window.YT.Player) {
      try {
        youtubePlayer1Ref.current = new window.YT.Player(video1Ref.current, {
          videoId: youtubeVideoIds[0],
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            playsinline: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setPlayingVideo1(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setPlayingVideo1(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                setPlayingVideo1(false);
              }
            },
            onReady: () => {
              console.log('YouTube Player 1 ready');
            },
            onError: (event) => {
              console.error('YouTube Player 1 error:', event);
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube Player 1:', error);
      }
    }

    // Initialize player 2
    if (video2Ref.current && !youtubePlayer2Ref.current && window.YT && window.YT.Player) {
      try {
        youtubePlayer2Ref.current = new window.YT.Player(video2Ref.current, {
          videoId: youtubeVideoIds[1],
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            playsinline: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setPlayingVideo2(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setPlayingVideo2(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                setPlayingVideo2(false);
              }
            },
            onReady: () => {
              console.log('YouTube Player 2 ready');
            },
            onError: (event) => {
              console.error('YouTube Player 2 error:', event);
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube Player 2:', error);
      }
    }

    // Initialize player 3
    if (video3Ref.current && !youtubePlayer3Ref.current && window.YT && window.YT.Player) {
      try {
        youtubePlayer3Ref.current = new window.YT.Player(video3Ref.current, {
          videoId: youtubeVideoIds[2],
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            playsinline: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setPlayingVideo3(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setPlayingVideo3(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                setPlayingVideo3(false);
              }
            },
            onReady: () => {
              console.log('YouTube Player 3 ready');
            },
            onError: (event) => {
              console.error('YouTube Player 3 error:', event);
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube Player 3:', error);
      }
    }

    // Initialize player 4
    if (video4Ref.current && !youtubePlayer4Ref.current && window.YT && window.YT.Player) {
      try {
        youtubePlayer4Ref.current = new window.YT.Player(video4Ref.current, {
          videoId: youtubeVideoIds[3],
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            playsinline: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setPlayingVideo4(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setPlayingVideo4(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                setPlayingVideo4(false);
              }
            },
            onReady: () => {
              console.log('YouTube Player 4 ready');
            },
            onError: (event) => {
              console.error('YouTube Player 4 error:', event);
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube Player 4:', error);
      }
    }
  };

  // Load YouTube IFrame API and initialize players
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      // Small delay to ensure refs are set
      const timer = setTimeout(() => {
        initializePlayers();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      initializeYouTubePlayers();
    }

    return () => {
      // Cleanup
      if (youtubePlayer1Ref.current && youtubePlayer1Ref.current.destroy) {
        youtubePlayer1Ref.current.destroy();
        youtubePlayer1Ref.current = null;
      }
      if (youtubePlayer2Ref.current && youtubePlayer2Ref.current.destroy) {
        youtubePlayer2Ref.current.destroy();
        youtubePlayer2Ref.current = null;
      }
      if (youtubePlayer3Ref.current && youtubePlayer3Ref.current.destroy) {
        youtubePlayer3Ref.current.destroy();
        youtubePlayer3Ref.current = null;
      }
      if (youtubePlayer4Ref.current && youtubePlayer4Ref.current.destroy) {
        youtubePlayer4Ref.current.destroy();
        youtubePlayer4Ref.current = null;
      }
    };
  }, [youtubeVideoIds]);

  return (
    <>
      <SEO 
        title="Gallery - Mahila Bikash Foundation | Foundation Videos"
        description="Watch videos showcasing the work and impact of Mahila Bikash Foundation - Women empowerment, self-help groups, and community development"
        keywords="mahila bikash foundation gallery, foundation videos, women empowerment videos, self-help group videos"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-0 bg-white">
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
            <img
              src="/website%20data/foundation.png"
              alt="Gallery"
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hindi-text">
                    {language === 'hindi' ? 'गैलरी' : 'Gallery'}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    {language === 'hindi' 
                      ? 'हमारे फाउंडेशन की कहानी और कार्य'
                      : 'Our Foundation\'s Story and Work'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 hindi-text">
                  {language === 'hindi' ? 'हमारे वीडियो' : 'Our Videos'}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {language === 'hindi' 
                    ? 'हमारे फाउंडेशन की यात्रा, कार्य और महिला सशक्तिकरण में हमारे योगदान को देखें'
                    : 'Watch our foundation\'s journey, work, and contribution to women empowerment'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Video 1 */}
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                    <div 
                      ref={video1Ref}
                      className="w-full h-full"
                    />
                    {/* Play/Pause Overlay */}
                    {!playingVideo1 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (youtubePlayer1Ref.current && youtubePlayer1Ref.current.playVideo) {
                            try {
                              youtubePlayer1Ref.current.unMute();
                              youtubePlayer1Ref.current.playVideo();
                              setMutedVideo1(false);
                            } catch (error) {
                              console.error('Error playing video 1:', error);
                              if (video1Ref.current) {
                                initializePlayers();
                              }
                            }
                          } else {
                            initializePlayers();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
                          <FiPlay className="h-12 w-12 text-primary-600 ml-1" />
                        </div>
                      </div>
                    )}
                    {/* Pause button when playing */}
                    {playingVideo1 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/0 cursor-pointer transition-opacity hover:bg-black/20 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          if (youtubePlayer1Ref.current) {
                            youtubePlayer1Ref.current.pauseVideo();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors opacity-0 hover:opacity-100">
                          <FiPause className="h-12 w-12 text-primary-600" />
                        </div>
                      </div>
                    )}
                    {/* Volume Control */}
                    {playingVideo1 && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMutedVideo1(!mutedVideo1);
                            if (youtubePlayer1Ref.current) {
                              if (mutedVideo1) {
                                youtubePlayer1Ref.current.unMute();
                              } else {
                                youtubePlayer1Ref.current.mute();
                              }
                            }
                          }}
                          className="bg-black/70 hover:bg-black/90 rounded-full p-3 text-white transition-colors"
                        >
                          {mutedVideo1 ? (
                            <FiVolumeX className="h-5 w-5" />
                          ) : (
                            <FiVolume2 className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video 2 */}
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                    <div 
                      ref={video2Ref}
                      className="w-full h-full"
                    />
                    {/* Play/Pause Overlay */}
                    {!playingVideo2 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (youtubePlayer2Ref.current && youtubePlayer2Ref.current.playVideo) {
                            try {
                              youtubePlayer2Ref.current.unMute();
                              youtubePlayer2Ref.current.playVideo();
                              setMutedVideo2(false);
                            } catch (error) {
                              console.error('Error playing video 2:', error);
                              if (video2Ref.current) {
                                initializePlayers();
                              }
                            }
                          } else {
                            initializePlayers();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
                          <FiPlay className="h-12 w-12 text-primary-600 ml-1" />
                        </div>
                      </div>
                    )}
                    {/* Pause button when playing */}
                    {playingVideo2 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/0 cursor-pointer transition-opacity hover:bg-black/20 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          if (youtubePlayer2Ref.current) {
                            youtubePlayer2Ref.current.pauseVideo();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors opacity-0 hover:opacity-100">
                          <FiPause className="h-12 w-12 text-primary-600" />
                        </div>
                      </div>
                    )}
                    {/* Volume Control */}
                    {playingVideo2 && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMutedVideo2(!mutedVideo2);
                            if (youtubePlayer2Ref.current) {
                              if (mutedVideo2) {
                                youtubePlayer2Ref.current.unMute();
                              } else {
                                youtubePlayer2Ref.current.mute();
                              }
                            }
                          }}
                          className="bg-black/70 hover:bg-black/90 rounded-full p-3 text-white transition-colors"
                        >
                          {mutedVideo2 ? (
                            <FiVolumeX className="h-5 w-5" />
                          ) : (
                            <FiVolume2 className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video 3 */}
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                    <div 
                      ref={video3Ref}
                      className="w-full h-full"
                    />
                    {/* Play/Pause Overlay */}
                    {!playingVideo3 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (youtubePlayer3Ref.current && youtubePlayer3Ref.current.playVideo) {
                            try {
                              youtubePlayer3Ref.current.unMute();
                              youtubePlayer3Ref.current.playVideo();
                              setMutedVideo3(false);
                            } catch (error) {
                              console.error('Error playing video 3:', error);
                              if (video3Ref.current) {
                                initializePlayers();
                              }
                            }
                          } else {
                            initializePlayers();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
                          <FiPlay className="h-12 w-12 text-primary-600 ml-1" />
                        </div>
                      </div>
                    )}
                    {/* Pause button when playing */}
                    {playingVideo3 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/0 cursor-pointer transition-opacity hover:bg-black/20 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          if (youtubePlayer3Ref.current) {
                            youtubePlayer3Ref.current.pauseVideo();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors opacity-0 hover:opacity-100">
                          <FiPause className="h-12 w-12 text-primary-600" />
                        </div>
                      </div>
                    )}
                    {/* Volume Control */}
                    {playingVideo3 && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMutedVideo3(!mutedVideo3);
                            if (youtubePlayer3Ref.current) {
                              if (mutedVideo3) {
                                youtubePlayer3Ref.current.unMute();
                              } else {
                                youtubePlayer3Ref.current.mute();
                              }
                            }
                          }}
                          className="bg-black/70 hover:bg-black/90 rounded-full p-3 text-white transition-colors"
                        >
                          {mutedVideo3 ? (
                            <FiVolumeX className="h-5 w-5" />
                          ) : (
                            <FiVolume2 className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video 4 */}
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                    <div 
                      ref={video4Ref}
                      className="w-full h-full"
                    />
                    {/* Play/Pause Overlay */}
                    {!playingVideo4 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (youtubePlayer4Ref.current && youtubePlayer4Ref.current.playVideo) {
                            try {
                              youtubePlayer4Ref.current.unMute();
                              youtubePlayer4Ref.current.playVideo();
                              setMutedVideo4(false);
                            } catch (error) {
                              console.error('Error playing video 4:', error);
                              if (video4Ref.current) {
                                initializePlayers();
                              }
                            }
                          } else {
                            initializePlayers();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
                          <FiPlay className="h-12 w-12 text-primary-600 ml-1" />
                        </div>
                      </div>
                    )}
                    {/* Pause button when playing */}
                    {playingVideo4 && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/0 cursor-pointer transition-opacity hover:bg-black/20 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          if (youtubePlayer4Ref.current) {
                            youtubePlayer4Ref.current.pauseVideo();
                          }
                        }}
                      >
                        <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors opacity-0 hover:opacity-100">
                          <FiPause className="h-12 w-12 text-primary-600" />
                        </div>
                      </div>
                    )}
                    {/* Volume Control */}
                    {playingVideo4 && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMutedVideo4(!mutedVideo4);
                            if (youtubePlayer4Ref.current) {
                              if (mutedVideo4) {
                                youtubePlayer4Ref.current.unMute();
                              } else {
                                youtubePlayer4Ref.current.mute();
                              }
                            }
                          }}
                          className="bg-black/70 hover:bg-black/90 rounded-full p-3 text-white transition-colors"
                        >
                          {mutedVideo4 ? (
                            <FiVolumeX className="h-5 w-5" />
                          ) : (
                            <FiVolume2 className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;


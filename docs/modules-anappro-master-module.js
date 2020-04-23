(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-anappro-master-module"],{

/***/ "./node_modules/is-retina/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-retina/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
  var mediaQuery;
  if (typeof window !== "undefined" && window !== null) {
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)";
    if (window.devicePixelRatio > 1.25) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
  }
  return false;
};


/***/ }),

/***/ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-avatar/fesm5/ngx-avatar.js ***!
  \*****************************************************/
/*! exports provided: AvatarComponent, AvatarModule, AvatarService, AvatarSource, defaultColors, defaultSources, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarModule", function() { return AvatarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarService", function() { return AvatarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarSource", function() { return AvatarSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColors", function() { return defaultColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSources", function() { return defaultSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SourceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AvatarConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AVATAR_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var is_retina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-retina */ "./node_modules/is-retina/index.js");
/* harmony import */ var is_retina__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_retina__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Contract of all async sources.
 * Every async source must implement the processResponse method that extracts the avatar url from the data
 * @abstract
 */
var /**
 * Contract of all async sources.
 * Every async source must implement the processResponse method that extracts the avatar url from the data
 * @abstract
 */
AsyncSource = /** @class */ (function () {
    function AsyncSource(sourceId) {
        this.sourceId = sourceId;
    }
    return AsyncSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var AvatarSource = {
    FACEBOOK: 'facebook',
    GOOGLE: 'google',
    TWITTER: 'twitter',
    VKONTAKTE: 'vkontakte',
    SKYPE: 'skype',
    GRAVATAR: 'gravatar',
    GITHUB: 'github',
    CUSTOM: 'custom',
    INITIALS: 'initials',
    VALUE: 'value',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
var /**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
Facebook = /** @class */ (function () {
    function Facebook(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.FACEBOOK;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Facebook.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return ('https://graph.facebook.com/' +
            (this.sourceId + "/picture?width=" + size + "&height=" + size));
    };
    return Facebook;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
var /**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
Twitter = /** @class */ (function () {
    function Twitter(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.TWITTER;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var twitterImgSize = this.getImageSize(size);
        return "https://twitter.com/" + this.sourceId + "/profile_image?size=" + twitterImgSize;
    };
    /**
     * @private
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getImageSize = /**
     * @private
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (size <= 24) {
            return 'mini';
        }
        if (size <= 48) {
            return 'normal';
        }
        if (size <= 73) {
            return 'bigger';
        }
        return 'original';
    };
    return Twitter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Google source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
var /**
 *  Google source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
Google = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Google, _super);
    function Google(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.GOOGLE;
        return _this;
    }
    /**
     * @return {?}
     */
    Google.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://picasaweb.google.com/data/entry/api/user/" + this.sourceId + "?alt=json";
    };
    /**
     * Extract google avatar from json data
     */
    /**
     * Extract google avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    Google.prototype.processResponse = /**
     * Extract google avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    function (data, size) {
        /** @type {?} */
        var avatarSrc = data.entry.gphoto$thumbnail.$t;
        if (avatarSrc) {
            return avatarSrc.replace('s64', 's' + size);
        }
    };
    return Google;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Custom source impelementation.
 *  return custom image as an avatar
 *
 */
var /**
 *  Custom source impelementation.
 *  return custom image as an avatar
 *
 */
Custom = /** @class */ (function () {
    function Custom(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.CUSTOM;
    }
    /**
     * @return {?}
     */
    Custom.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return this.sourceId;
    };
    return Custom;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initials source impelementation.
 * return the initals of the given value
 */
var /**
 * Initials source impelementation.
 * return the initals of the given value
 */
Initials = /** @class */ (function () {
    function Initials(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.INITIALS;
    }
    /**
     * @param {?} initialsSize
     * @return {?}
     */
    Initials.prototype.getAvatar = /**
     * @param {?} initialsSize
     * @return {?}
     */
    function (initialsSize) {
        return this.getInitials(this.sourceId, initialsSize);
    };
    /**
     * Returns the initial letters of a name in a string.
     */
    /**
     * Returns the initial letters of a name in a string.
     * @private
     * @param {?} name
     * @param {?} size
     * @return {?}
     */
    Initials.prototype.getInitials = /**
     * Returns the initial letters of a name in a string.
     * @private
     * @param {?} name
     * @param {?} size
     * @return {?}
     */
    function (name, size) {
        name = name ? name.trim() : null;
        if (!name) {
            return '';
        }
        /** @type {?} */
        var initials = name.split(' ');
        if (size && size < initials.length) {
            return this.constructInitials(initials.slice(0, size));
        }
        else {
            return this.constructInitials(initials);
        }
    };
    /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     */
    /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     * @private
     * @param {?} elements
     * @return {?}
     */
    Initials.prototype.constructInitials = /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     * @private
     * @param {?} elements
     * @return {?}
     */
    function (elements) {
        if (!elements || !elements.length) {
            return '';
        }
        return elements
            .filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element && element.length > 0; }))
            .map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element[0].toUpperCase(); }))
            .join('');
    };
    return Initials;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Gravatar source impelementation.
 *  Fetch avatar source based on gravatar email
 */
var /**
 *  Gravatar source impelementation.
 *  Fetch avatar source based on gravatar email
 */
Gravatar = /** @class */ (function () {
    function Gravatar(value) {
        this.value = value;
        this.sourceType = AvatarSource.GRAVATAR;
        this.sourceId = value.match('^[a-f0-9]{32}$')
            ? value
            : ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"].hashStr(value).toString();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Gravatar.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var avatarSize = is_retina__WEBPACK_IMPORTED_MODULE_3___default()() ? size * 2 : size;
        return "https://secure.gravatar.com/avatar/" + this.sourceId + "?s=" + avatarSize + "&d=404";
    };
    return Gravatar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Skype source impelementation.
 *  Fetch avatar source based on skype identifier
 */
var /**
 *  Skype source impelementation.
 *  Fetch avatar source based on skype identifier
 */
Skype = /** @class */ (function () {
    function Skype(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.SKYPE;
    }
    /**
     * @return {?}
     */
    Skype.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://api.skype.com/users/" + this.sourceId + "/profile/avatar";
    };
    return Skype;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Value source impelementation.
 *  return the value as avatar
 */
var /**
 *  Value source impelementation.
 *  return the value as avatar
 */
Value = /** @class */ (function () {
    function Value(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.VALUE;
    }
    /**
     * @return {?}
     */
    Value.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return this.sourceId;
    };
    return Value;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Vkontakte source impelementation.
 *  Fetch avatar source based on vkontakte identifier
 *  and image size
 * @type {?}
 */
var apiVersion = 5.8;
var Vkontakte = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Vkontakte, _super);
    function Vkontakte(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.VKONTAKTE;
        return _this;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Vkontakte.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var imgSize = this.getImageSize(size);
        return "https://api.vk.com/method/users.get?user_id=" + this.sourceId + "&v=" + apiVersion + "&fields=" + imgSize;
    };
    /**
     * extract vkontakte avatar from json data
     */
    /**
     * extract vkontakte avatar from json data
     * @param {?} data
     * @return {?}
     */
    Vkontakte.prototype.processResponse = /**
     * extract vkontakte avatar from json data
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // avatar key property is the size used to generate avatar url
        // size property is always the last key in the response object
        /** @type {?} */
        var sizeProperty = Object.keys(data['response'][0]).pop();
        // return avatar src
        return data['response'][0][sizeProperty];
    };
    /**
     * Returns image size related to vkontakte API
     */
    /**
     * Returns image size related to vkontakte API
     * @private
     * @param {?} size
     * @return {?}
     */
    Vkontakte.prototype.getImageSize = /**
     * Returns image size related to vkontakte API
     * @private
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (size <= 50) {
            return 'photo_50';
        }
        if (size <= 100) {
            return 'photo_100';
        }
        if (size <= 200) {
            return 'photo_200';
        }
        return 'photo_max';
    };
    return Vkontakte;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
var /**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
Github = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Github, _super);
    function Github(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.GITHUB;
        return _this;
    }
    /**
     * @return {?}
     */
    Github.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://api.github.com/users/" + this.sourceId;
    };
    /**
     * extract github avatar from json data
     */
    /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    Github.prototype.processResponse = /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    function (data, size) {
        if (size) {
            return data.avatar_url + "&s=" + size;
        }
        return data.avatar_url;
    };
    return Github;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory class that implements factory method pattern.
 * Used to create Source implementation class based
 * on the source Type
 */
var SourceFactory = /** @class */ (function () {
    function SourceFactory() {
        this.sources = {};
        this.sources[AvatarSource.FACEBOOK] = Facebook;
        this.sources[AvatarSource.TWITTER] = Twitter;
        this.sources[AvatarSource.GOOGLE] = Google;
        this.sources[AvatarSource.SKYPE] = Skype;
        this.sources[AvatarSource.GRAVATAR] = Gravatar;
        this.sources[AvatarSource.CUSTOM] = Custom;
        this.sources[AvatarSource.INITIALS] = Initials;
        this.sources[AvatarSource.VALUE] = Value;
        this.sources[AvatarSource.VKONTAKTE] = Vkontakte;
        this.sources[AvatarSource.GITHUB] = Github;
    }
    /**
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    SourceFactory.prototype.newInstance = /**
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        return new this.sources[sourceType](sourceValue);
    };
    SourceFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    SourceFactory.ctorParameters = function () { return []; };
    return SourceFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token used to inject the AvatarConfig object
 * @type {?}
 */
var AVATAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('avatar.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarConfigService = /** @class */ (function () {
    function AvatarConfigService(userConfig) {
        this.userConfig = userConfig;
    }
    /**
     * @param {?} defaultSources
     * @return {?}
     */
    AvatarConfigService.prototype.getAvatarSources = /**
     * @param {?} defaultSources
     * @return {?}
     */
    function (defaultSources) {
        if (this.userConfig &&
            this.userConfig.sourcePriorityOrder &&
            this.userConfig.sourcePriorityOrder.length) {
            /** @type {?} */
            var uniqueSources = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(new Set(this.userConfig.sourcePriorityOrder));
            /** @type {?} */
            var validSources_1 = uniqueSources.filter((/**
             * @param {?} source
             * @return {?}
             */
            function (source) {
                return defaultSources.includes(source);
            }));
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(validSources_1, defaultSources.filter((/**
             * @param {?} source
             * @return {?}
             */
            function (source) { return !validSources_1.includes(source); })));
        }
        return defaultSources;
    };
    /**
     * @param {?} defaultColors
     * @return {?}
     */
    AvatarConfigService.prototype.getAvatarColors = /**
     * @param {?} defaultColors
     * @return {?}
     */
    function (defaultColors) {
        return ((this.userConfig &&
            this.userConfig.colors &&
            this.userConfig.colors.length &&
            this.userConfig.colors) ||
            defaultColors);
    };
    AvatarConfigService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    AvatarConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AVATAR_CONFIG,] }] }
    ]; };
    return AvatarConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * list of Supported avatar sources
 * @type {?}
 */
var defaultSources = [
    AvatarSource.FACEBOOK,
    AvatarSource.GOOGLE,
    AvatarSource.TWITTER,
    AvatarSource.VKONTAKTE,
    AvatarSource.SKYPE,
    AvatarSource.GRAVATAR,
    AvatarSource.GITHUB,
    AvatarSource.CUSTOM,
    AvatarSource.INITIALS,
    AvatarSource.VALUE
];
/**
 * list of default colors
 * @type {?}
 */
var defaultColors = [
    '#1abc9c',
    '#3498db',
    '#f1c40f',
    '#8e44ad',
    '#e74c3c',
    '#d35400',
    '#2c3e50',
    '#7f8c8d'
];
/**
 * Provides utilities methods related to Avatar component
 */
var AvatarService = /** @class */ (function () {
    function AvatarService(http, avatarConfigService) {
        this.http = http;
        this.avatarConfigService = avatarConfigService;
        this.avatarSources = defaultSources;
        this.avatarColors = defaultColors;
        this.overrideAvatarSources();
        this.overrideAvatarColors();
    }
    /**
     * @param {?} avatarUrl
     * @return {?}
     */
    AvatarService.prototype.fetchAvatar = /**
     * @param {?} avatarUrl
     * @return {?}
     */
    function (avatarUrl) {
        return this.http.get(avatarUrl);
    };
    /**
     * @param {?} avatarText
     * @return {?}
     */
    AvatarService.prototype.getRandomColor = /**
     * @param {?} avatarText
     * @return {?}
     */
    function (avatarText) {
        if (!avatarText) {
            return 'transparent';
        }
        /** @type {?} */
        var asciiCodeSum = this.calculateAsciiCode(avatarText);
        return this.avatarColors[asciiCodeSum % this.avatarColors.length];
    };
    /**
     * @param {?} sourceType1
     * @param {?} sourceType2
     * @return {?}
     */
    AvatarService.prototype.copmareSources = /**
     * @param {?} sourceType1
     * @param {?} sourceType2
     * @return {?}
     */
    function (sourceType1, sourceType2) {
        return (this.getSourcePriority(sourceType1) - this.getSourcePriority(sourceType2));
    };
    /**
     * @param {?} source
     * @return {?}
     */
    AvatarService.prototype.isSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.avatarSources.includes((/** @type {?} */ (source)));
    };
    /**
     * @param {?} sourceType
     * @return {?}
     */
    AvatarService.prototype.isTextAvatar = /**
     * @param {?} sourceType
     * @return {?}
     */
    function (sourceType) {
        return [AvatarSource.INITIALS, AvatarSource.VALUE].includes(sourceType);
    };
    /**
     * @private
     * @return {?}
     */
    AvatarService.prototype.overrideAvatarSources = /**
     * @private
     * @return {?}
     */
    function () {
        this.avatarSources = this.avatarConfigService.getAvatarSources(defaultSources);
    };
    /**
     * @private
     * @return {?}
     */
    AvatarService.prototype.overrideAvatarColors = /**
     * @private
     * @return {?}
     */
    function () {
        this.avatarColors = this.avatarConfigService.getAvatarColors(defaultColors);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AvatarService.prototype.calculateAsciiCode = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value
            .split('')
            .map((/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) { return letter.charCodeAt(0); }))
            .reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        function (previous, current) { return previous + current; }));
    };
    /**
     * @private
     * @param {?} sourceType
     * @return {?}
     */
    AvatarService.prototype.getSourcePriority = /**
     * @private
     * @param {?} sourceType
     * @return {?}
     */
    function (sourceType) {
        return this.avatarSources.indexOf(sourceType);
    };
    AvatarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    AvatarService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: AvatarConfigService }
    ]; };
    return AvatarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Universal avatar component that
 * generates avatar from different sources
 *
 * export
 * class AvatarComponent
 * implements {OnChanges}
 */
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(elementRef, sourceFactory, avatarService) {
        this.elementRef = elementRef;
        this.sourceFactory = sourceFactory;
        this.avatarService = avatarService;
        this.round = true;
        this.size = 50;
        this.textSizeRatio = 3;
        this.fgColor = '#FFF';
        this.style = {};
        this.cornerRadius = 0;
        this.clickOnAvatar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAlive = true;
        this.avatarStyle = {};
        this.hostStyle = {};
        this.currentSource = 0;
        this.sources = Array();
    }
    /**
     * @return {?}
     */
    AvatarComponent.prototype.onAvatarClicked = /**
     * @return {?}
     */
    function () {
        this.clickOnAvatar.emit(this.sources[this.currentSource - 1]);
    };
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     */
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    AvatarComponent.prototype.ngOnChanges = /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var propName in changes) {
            if (this.avatarService.isSource(propName) &&
                changes[propName].currentValue) {
                /** @type {?} */
                var currentValue = changes[propName].currentValue;
                this.addSource(AvatarSource[propName.toUpperCase()], currentValue);
            }
        }
        // reintialize the avatar component when a source property value has changed
        // the fallback system must be re-invoked with the new values.
        this.initializeAvatar();
    };
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     */
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    AvatarComponent.prototype.fetchAvatarSource = /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var avatarSource = this.sources[this.currentSource];
        if (!avatarSource) {
            return;
        }
        if (this.avatarService.isTextAvatar(avatarSource.sourceType)) {
            this.buildTextAvatar(avatarSource);
            // TODO: check if this is needed
            this.avatarSrc = undefined;
        }
        else {
            this.buildImageAvatar(avatarSource);
        }
        this.currentSource++;
    };
    /**
     * @return {?}
     */
    AvatarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * Initialize the avatar component and its fallback system
     */
    /**
     * Initialize the avatar component and its fallback system
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.initializeAvatar = /**
     * Initialize the avatar component and its fallback system
     * @private
     * @return {?}
     */
    function () {
        this.currentSource = 0;
        if (this.sources.length > 0 && this.sources[this.currentSource]) {
            this.sortAvatarSources();
            this.fetchAvatarSource();
            this.hostStyle = {
                width: this.size + 'px',
                height: this.size + 'px'
            };
        }
    };
    /**
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.sortAvatarSources = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.sources.sort((/**
         * @param {?} source1
         * @param {?} source2
         * @return {?}
         */
        function (source1, source2) {
            return _this.avatarService.copmareSources(source1.sourceType, source2.sourceType);
        }));
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.buildTextAvatar = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        this.avatarText = avatarSource.getAvatar(this.initialsSize);
        this.avatarStyle = this.getInitialsStyle(avatarSource.sourceId);
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.buildImageAvatar = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        this.avatarStyle = this.getImageStyle();
        if (avatarSource instanceof AsyncSource) {
            this.fetchAndProcessAsyncAvatar(avatarSource);
        }
        else {
            this.avatarSrc = avatarSource.getAvatar(this.size);
        }
    };
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @private
     * @param {?} avatarValue
     * @return {?}
     */
    AvatarComponent.prototype.getInitialsStyle = /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @private
     * @param {?} avatarValue
     * @return {?}
     */
    function (avatarValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ textAlign: 'center', borderRadius: this.round ? '100%' : this.cornerRadius + 'px', border: this.borderColor ? '1px solid ' + this.borderColor : '', textTransform: 'uppercase', color: this.fgColor, backgroundColor: this.bgColor
                ? this.bgColor
                : this.avatarService.getRandomColor(avatarValue), font: Math.floor(this.size / this.textSizeRatio) +
                'px Helvetica, Arial, sans-serif', lineHeight: this.size + 'px' }, this.style);
    };
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.getImageStyle = /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @private
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ maxWidth: '100%', borderRadius: this.round ? '50%' : this.cornerRadius + 'px', border: this.borderColor ? '1px solid ' + this.borderColor : '', width: this.size, height: this.size }, this.style);
    };
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     */
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @private
     * @param {?} source
     * @return {?}
     */
    AvatarComponent.prototype.fetchAndProcessAsyncAvatar = /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var _this = this;
        this.avatarService
            .fetchAvatar(source.getAvatar())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])((/**
         * @return {?}
         */
        function () { return _this.isAlive; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return source.processResponse(response, _this.size); })))
            .subscribe((/**
         * @param {?} avatarSrc
         * @return {?}
         */
        function (avatarSrc) { return (_this.avatarSrc = avatarSrc); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error("ngx-avatar: error while fetching " + source.sourceType + " avatar ");
        }));
    };
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     */
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @private
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    AvatarComponent.prototype.addSource = /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @private
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        if (!this.isSourceExist(sourceType)) {
            this.sources.push(this.sourceFactory.newInstance(sourceType, sourceValue));
        }
        else {
            /** @type {?} */
            var index = this.sources.findIndex((/**
             * @param {?} source
             * @return {?}
             */
            function (source) { return source.sourceType === sourceType; }));
            this.sources[index].sourceId = sourceValue;
        }
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.isSourceExist = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        return this.sources.map((/**
         * @param {?} source
         * @return {?}
         */
        function (source) { return source.sourceType; })).includes(avatarSource);
    };
    AvatarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-avatar',
                    template: "\n    <div\n      (click)=\"onAvatarClicked()\"\n      class=\"avatar-container\"\n      [ngStyle]=\"hostStyle\"\n    >\n      <img\n        *ngIf=\"avatarSrc; else textAvatar\"\n        [src]=\"avatarSrc\"\n        [width]=\"size\"\n        [height]=\"size\"\n        [ngStyle]=\"avatarStyle\"\n        (error)=\"fetchAvatarSource($event)\"\n        class=\"avatar-content\"\n      />\n      <ng-template #textAvatar>\n        <div *ngIf=\"avatarText\" class=\"avatar-content\" [ngStyle]=\"avatarStyle\">\n          {{ avatarText }}\n        </div>\n      </ng-template>\n    </div>\n  ",
                    styles: ["\n      :host {\n        border-radius: '50%';\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: SourceFactory },
        { type: AvatarService }
    ]; };
    AvatarComponent.propDecorators = {
        round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        textSizeRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cornerRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        facebook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['facebookId',] }],
        twitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['twitterId',] }],
        google: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['googleId',] }],
        vkontakte: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['vkontakteId',] }],
        skype: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['skypeId',] }],
        gravatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['gravatarId',] }],
        github: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['githubId',] }],
        custom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] }],
        initials: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['name',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placeholder',] }],
        initialsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['initialsSize',] }],
        clickOnAvatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AvatarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvatarModule = /** @class */ (function () {
    function AvatarModule() {
    }
    /**
     * @param {?=} avatarConfig
     * @return {?}
     */
    AvatarModule.forRoot = /**
     * @param {?=} avatarConfig
     * @return {?}
     */
    function (avatarConfig) {
        return {
            ngModule: AvatarModule,
            providers: [
                { provide: AVATAR_CONFIG, useValue: avatarConfig ? avatarConfig : {} }
            ]
        };
    };
    AvatarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [AvatarComponent],
                    providers: [SourceFactory, AvatarService, AvatarConfigService],
                    exports: [AvatarComponent]
                },] }
    ];
    return AvatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-avatar.js.map


/***/ }),

/***/ "./node_modules/ts-md5/dist/md5.js":
/*!*****************************************!*\
  !*** ./node_modules/ts-md5/dist/md5.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = /** @class */ (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "./src/app/modules/anappro/master.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/anappro/master.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize class=\"h-100 mat-typography\">\n\n  <mat-sidenav color=\"primary\" class=\"h-100\" #drawer [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'slide' : 'side'\" [opened]=\"!(isHandset$ | async)\" class=\"sidenav\"\n    [attr.role]=\"'navigation'\" [mode]=\"'side'\" [opened]=\"true\">\n\n\n<app-side-nav ></app-side-nav>\n \n  </mat-sidenav>\n\n\n  <mat-sidenav-content class=\"d-flex flex-column\" autosize>\n\n    <div id=\"page-content\">\n      <!-- <mat-toolbar color=\"primary\">\n              <span class=\"spacer\"></span>\n            </mat-toolbar> -->\n      <div *ngIf=\"isHandset$ | async\" class=\"toggleRight\">\n        <button class=\"float-right\" type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n          <mat-icon fontSet=\"fa\" fontIcon=\"fa-bars\"></mat-icon>\n        </button>\n      </div>\n\n\n      <router-outlet></router-outlet>\n\n    </div>\n\n    <footer id=\"sticky-footer\" class=\"py-4\">\n      <div class=\"container text-center\">\n        <small>Copyright &copy; ngStarter</small>\n      </div>\n    </footer>\n\n\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/modules/anappro/master.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/anappro/master.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-content {\n  flex: 1 0 auto; }\n\n#sticky-footer {\n  flex-shrink: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFuYXBwcm9cXG1hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2R5IHtcbi8vICAgaGVpZ2h0OiAxMDAlXG4vLyB9XG5cblxuI3BhZ2UtY29udGVudCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4jc3RpY2t5LWZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiBub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/anappro/master.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/anappro/master.component.ts ***!
  \*****************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_anappro_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-anappro/components/create-modal/create-modal.component */ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.ts");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock-data */ "./src/app/modules/anappro/mock-data.ts");
/* harmony import */ var _mock_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock-service.service */ "./src/app/modules/anappro/mock-service.service.ts");
/* harmony import */ var _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-anappro/services/projects.service */ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts");
/* harmony import */ var _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-anappro/services/side-nav.service */ "./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-anappro/store */ "./src/app/modules/anappro/shared-anappro/store/index.ts");













// import { Observable } from "rxjs/Observable";

var MasterComponent = /** @class */ (function () {
    function MasterComponent(store, breakpointObserver, router, activatedRoute, dialog, 
    // private route: ActivatedRoute,
    mockService, projectsService, sideNavService) {
        var _this = this;
        this.store = store;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.mockService = mockService;
        this.projectsService = projectsService;
        this.sideNavService = sideNavService;
        this.isHandset$ = this.breakpointObserver.observe('(max-width: 599px)')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.activatedUrl = this.router.url;
        var urlSegments = this.router.url.split('/');
        this.activeNav = urlSegments[2];
        console.log('activeNav urlSegments[2]', urlSegments[2]);
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this.activatedUrl = event.url;
                var activeUrlSegments = event.url.split('/');
                _this.activeNav = activeUrlSegments[2];
                console.log('this.activatedUrl', _this.activatedUrl);
                console.log('this.activeNav', _this.activeNav);
                // this.setSideNavState(activeUrlSegments);
                // this.sideNavService.setSecondarySidenavContent(this.activeNav);
                _this.setSideNavState(_this.activeNav);
                if (_this.activeNav === 'project') {
                    var currentProjectId = urlSegments[3];
                    // this.setSecondarySidenavMenu();
                }
                else if (_this.activeNav === 'projects') {
                    // mockData.projects.data
                    _this.setSecondarySidenavMenu(_this.projectsService.getAllProjects().data);
                }
            }
        });
        this.filteredItems = this.mockService.query();
        // this.TreeData = this.getTreeData();
        // console.log(this.TreeData);
    }
    MasterComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_anappro_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"], {
            disableClose: true,
            data: {},
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // do this in the modal and return an object!
            if (result !== 'exit') {
                var newItem = {
                    id: '21bb9516-861c-4356-553d-959598695baf',
                    name: result.name,
                    about: result.about,
                };
                _this.createItem(newItem);
            }
        });
    };
    MasterComponent.prototype.createItem = function (item) {
        this.mockService.items.push(item);
        this.filteredItems = this.mockService.query();
    };
    MasterComponent.prototype.getItems = function () {
        this.items = _mock_data__WEBPACK_IMPORTED_MODULE_7__["projects"];
    };
    MasterComponent.prototype.ngOnInit = function () {
        this.appPageState$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getAppPageState"]);
        this.currentProject$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getCurrentProject"]);
        this.currentApplication$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getCurrentApplication"]);
        this.sidenavExpanded$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getSidenavExpanded"]);
        this.sidenavState$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getSidenavState"]);
        this.primarySidenavMenu$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getPrimarySidenavMenu"]);
        this.secondarySidenavMenu$ = this.store.select(_shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["getSecondarySidenavMenu"]);
        //TODO generate this from projects data
        this.TreeData = _mock_data__WEBPACK_IMPORTED_MODULE_7__["TreeData"];
        this.getItems();
    };
    MasterComponent.prototype.setCurrentProject = function (project) {
        this.store.dispatch(new _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["SetCurrentProject"](project));
    };
    MasterComponent.prototype.setCurrentApplication = function (application) {
        this.store.dispatch(new _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["SetCurrentApplication"](application));
    };
    MasterComponent.prototype.setSideNavState = function (state) {
        this.store.dispatch(new _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["SetSideNavState"](state));
    };
    MasterComponent.prototype.setPrimarySidenavMenu = function (menu) {
        this.store.dispatch(new _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["SetPrimaryMenu"](menu));
    };
    MasterComponent.prototype.setSecondarySidenavMenu = function (menu) {
        this.store.dispatch(new _shared_anappro_store__WEBPACK_IMPORTED_MODULE_12__["SetSecondaryMenu"](menu));
    };
    MasterComponent.prototype.routeToSelected = function (item) {
        if (item.route) {
            if (item.params) {
                this.router.navigate([item.route, item.params]);
            }
            else {
                this.router.navigate([item.route]);
            }
        }
    };
    MasterComponent.prototype.selectItem = function (item) {
        // set currently selected item variable
        this.selectedItem = item;
        // console.log(item, 'item selected');
        if (item.nodeType && item.nodeType === 'project') {
            this.currentProject = this.projectsService.getProjectById(item.id);
            // this.sideNavService.setSecondarySidenavContent('project');
            this.setCurrentProject(item);
            this.setSideNavState('project');
            var secondarySidenavMenu_1 = [];
            var projectApplications = this.projectsService.getProjectApplications(item.id);
            console.log(projectApplications, 'projectApplications');
            projectApplications.forEach(function (application) {
                secondarySidenavMenu_1.push({
                    title: application.name,
                    route: 'anappro/application/' + application.projectId + '/' + application.applicationId,
                    icon: 'chrome_reader_mode',
                    nodeType: 'application'
                });
            });
            this.setSecondarySidenavMenu(secondarySidenavMenu_1);
            // this.sideNavService.ssetecondarySidenavMenu(secondarySidenavMenu);
            // this.sideNavService.setSidenavData('currentProject' , item);
            console.log(secondarySidenavMenu_1, 'secondarySidenavMenu after edit');
            this.router.navigate(['anappro/project/', item.id, 'applications']);
        }
        if (item.nodeType && item.nodeType === 'projectsParent') {
            this.sideNavService.setSecondarySidenavContent('projects');
            this.router.navigate(['anappro/projects']);
        }
        if (item.nodeType && item.nodeType === 'application') {
            this.sideNavService.setSecondarySidenavContent('application');
            var applicationMenu = [
                {
                    title: 'Theme',
                    route: 'demo/dynamic-form',
                    icon: 'chrome_reader_mode',
                },
                {
                    title: 'Modules',
                    route: 'demo/dynamic-form',
                    icon: 'chrome_reader_mode',
                }
            ];
            this.sideNavService.setSecondarySidenavMenuItems(applicationMenu);
            this.router.navigate(['anappro/application/', item.projectId, item.applicationId]);
        }
    };
    MasterComponent.prototype.clearSearch = function () {
        this.searchTerm = '';
        this.search(this.searchTerm);
    };
    MasterComponent.prototype.search = function (val) {
        if (!val || !val.trim()) {
            this.filteredItems = this.mockService.query();
            return;
        }
        this.filteredItems = this.mockService.query({
            name: val
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
    ], MasterComponent.prototype, "sidenav", void 0);
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/modules/anappro/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/modules/anappro/master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _mock_service_service__WEBPACK_IMPORTED_MODULE_8__["MockServiceService"],
            _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_9__["ProjectsService"],
            _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_10__["SideNavService"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/master.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/anappro/master.module.ts ***!
  \**************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _master_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master.router */ "./src/app/modules/anappro/master.router.ts");
/* harmony import */ var _shared_anappro_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-anappro/components/create-modal/create-modal.component */ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.ts");
/* harmony import */ var _shared_anappro_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component */ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.ts");
/* harmony import */ var _shared_anappro_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-anappro/components/edit-modal/edit-modal.component */ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.ts");
/* harmony import */ var _shared_anappro_components_tree_nav_menu_tree_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-anappro/components/tree-nav-menu/tree-nav-menu.component */ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _shared_anappro_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-anappro/components/side-nav/side-nav.component */ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.ts");



// import { SharedAdminModule } from '../shared-admin/shared-admin.module';









var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _master_router__WEBPACK_IMPORTED_MODULE_5__["router"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_10__["AvatarModule"]
            ],
            declarations: [
                _master_router__WEBPACK_IMPORTED_MODULE_5__["RoutingComponents"],
                _shared_anappro_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"],
                _shared_anappro_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDeleteModalComponent"],
                _shared_anappro_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditModalComponent"],
                _shared_anappro_components_tree_nav_menu_tree_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["TreeNavMenuComponent"],
                _shared_anappro_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"],
            ],
            entryComponents: [
                _shared_anappro_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"],
                _shared_anappro_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDeleteModalComponent"],
                _shared_anappro_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditModalComponent"]
            ],
            exports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                // SharedAdminModule
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_10__["AvatarModule"]
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/modules/anappro/master.router.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/anappro/master.router.ts ***!
  \**************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.component */ "./src/app/modules/anappro/master.component.ts");
/* harmony import */ var _project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-dashboard/project-dashboard.component */ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var _project_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-dashboard/users/users.component */ "./src/app/modules/anappro/project-dashboard/users/users.component.ts");
/* harmony import */ var _project_dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-dashboard/about/about.component */ "./src/app/modules/anappro/project-dashboard/about/about.component.ts");
/* harmony import */ var _project_dashboard_applications_applications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-dashboard/applications/applications.component */ "./src/app/modules/anappro/project-dashboard/applications/applications.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/modules/anappro/projects/projects.component.ts");







// routing components
var RoutingComponents = [
    _master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"],
    _project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ProjectDashboardComponent"],
    _project_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
    _project_dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
    _project_dashboard_applications_applications_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationsComponent"]
];
var routes = [
    {
        path: '', component: _master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"],
        children: [
            {
                path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
            },
            {
                path: 'project/:id', component: _project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ProjectDashboardComponent"],
                children: [
                    { path: 'users', component: _project_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
                    { path: 'about', component: _project_dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                    { path: 'applications', component: _project_dashboard_applications_applications_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationsComponent"] },
                ]
            },
            {
                path: 'application/:projectId/:applicationId',
                loadChildren: './application-dashboard/application-dashboard.module#ApplicationDashboardModule'
            },
        ],
    },
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/about/about.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/about/about.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n{{aboutProject}}\n</p>\n"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/about/about.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/about/about.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9wcm9qZWN0LWRhc2hib2FyZC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/about/about.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/about/about.component.ts ***!
  \****************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data */ "./src/app/modules/anappro/mock-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.parent.url.subscribe(function (urlPath) {
            // get project ID from url
            var url = urlPath[urlPath.length - 1].path;
            console.log(url, 'url');
            _this.aboutProject = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data.filter(function (project) { return project.id === url; })[0].about;
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/anappro/project-dashboard/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/modules/anappro/project-dashboard/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/applications/applications.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/applications/applications.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  applications works!\n</p>\n\n<pre>{{applications | json}}</pre>"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/applications/applications.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/applications/applications.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9wcm9qZWN0LWRhc2hib2FyZC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/applications/applications.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/applications/applications.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-anappro/services/projects.service */ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent(projectsService, activatedRoute, router) {
        var _this = this;
        this.projectsService = projectsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedUrl = this.router.url;
        var urlSegments = this.router.url.split('/');
        this.activeNav = urlSegments[2];
        this.projectId = urlSegments[3];
        this.applications = this.projectsService.getProjectApplications(this.projectId);
        console.log('activeNav urlSegments[3]', urlSegments[3]);
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.activatedUrl = event.url;
                var activeUrlSegments = event.url.split('/');
                _this.activeNav = activeUrlSegments[2];
            }
        });
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/modules/anappro/project-dashboard/applications/applications.component.html"),
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/modules/anappro/project-dashboard/applications/applications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/project-dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"h-100\">\n  <mat-drawer-content>\n\n<div class=\"d-flex h-100\">\n<div class=\"h-100\" style=\"flex:1;\">\n  \n  <mat-toolbar class=\"mb-3 mat-typography\" >\n        <mat-toolbar-row>\n          <!-- <div style=\"flex:1;\" class=\"d-flex flex-wrap justify-content-between align-items-middle mat-typography\">\n            <div>\n              <h2 class=\"title\">{{item?.name}}</h2>\n            </div>\n      \n            <p class=\"mat-subheading-1 pt-3 pb-3\">{{item?.contact_info}}</p>\n          </div> -->\n          <breadcrumbs style=\"flex:1;\" [breadcrumbs]=\"breadcrumbs\" (onSelect)=\"selectBreadcrumb($event)\"></breadcrumbs>\n          \n      \n      \n      \n          <!-- <div class=\"pl-5\">\n            <button mat-icon-button (click)=\"openEditDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Edit\">\n              <mat-icon class=\"material-icons\">edit</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"openConfirmDeleteDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Delete\">\n              <mat-icon class=\"material-icons\">delete</mat-icon>\n            </button>\n          </div> -->\n      \n      \n        </mat-toolbar-row>\n      \n        <mat-toolbar-row>\n            <button mat-button color=\"primary\" [routerLink]=\"['./applications/']\">Applications</button>\n\n          <button mat-button color=\"primary\" [routerLink]=\"['./about/']\">About</button>\n          <button mat-button color=\"primary\" [routerLink]=\"['./users/']\">Users ({{item?.users.length}})</button>\n      \n      \n        </mat-toolbar-row>\n      \n      </mat-toolbar>\n      \n      \n      <div class=\"container-fluid mat-typography\">\n        <router-outlet></router-outlet>\n      </div>\n  \n</div>\n<div class=\"h-100\">\n    <mat-list>\n\n      <mat-list-item>\n        <mat-icon mat-list-icon  (click)=\"openChatSidebar()\">people_outline</mat-icon>\n\n      </mat-list-item>\n      <mat-list-item>\n\n      <mat-icon mat-list-icon>folder</mat-icon>\n      </mat-list-item>\n\n      </mat-list>\n\n  </div>\n</div>\n\n  </mat-drawer-content>\n  <mat-drawer #drawer  [(opened)]=\"opened\" class=\"h-100\" position=\"end\" mode=\"side\" opened>\n      <mat-toolbar class=\"mb-3 mat-typography\" >\n        <h2>{{rightSidebarTitle}}</h2>\n          <div style=\"flex:1;\"></div>\n          <div class=\"ml-auto\">\n              <mat-icon mat-list-icon  (click)=\"drawer.close()\">close</mat-icon>\n          </div>\n      </mat-toolbar>\n\n\n      <div *ngIf=\"rightDrawerContent === 'members'\" id=\"membersRightDrawer\">\n        <h3>Members</h3>\n          <mat-nav-list>\n              <a [class.active]=\"user.id === selectedUser?.id\" mat-list-item *ngFor=\"let user of projectMembers\">\n                {{ user.name }}\n              </a>\n            </mat-nav-list>\n      </div>\n\n\n   \n  </mat-drawer>\n\n</mat-drawer-container>\n\n\n"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/project-dashboard.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-actions button {\n  color: grey; }\n  .item-actions button:hover {\n    color: #344D91; }\n  .week-title {\n  font-weight: bold;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3Byb2plY3QtZGFzaGJvYXJkL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFuYXBwcm9cXHByb2plY3QtZGFzaGJvYXJkXFxwcm9qZWN0LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFdBQVcsRUFBQTtFQUZuQjtJQUtZLGNBQWMsRUFBQTtFQU0xQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuYXBwcm8vcHJvamVjdC1kYXNoYm9hcmQvcHJvamVjdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1hY3Rpb25zIHtcbiAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQ0RDkxO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi53ZWVrLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/project-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardComponent", function() { return ProjectDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_anappro_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-anappro/components/edit-modal/edit-modal.component */ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.ts");
/* harmony import */ var _shared_anappro_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component */ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.ts");
/* harmony import */ var _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-anappro/services/side-nav.service */ "./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mock-data */ "./src/app/modules/anappro/mock-data.ts");








var ProjectDashboardComponent = /** @class */ (function () {
    function ProjectDashboardComponent(activatedRoute, router, dialog, sideNavService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
        this.sideNavService = sideNavService;
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this.itemId = params['id'];
            _this.getCurrentItem(_this.itemId);
            // this.projectMembers = this.currentProject.users;
            _this.projectMembers = _mock_data__WEBPACK_IMPORTED_MODULE_7__["projects"].data.filter(function (item) { return item.id === _this.itemId; })[0].users;
            console.log(_this.projectMembers);
            _this.breadcrumbs = [
                {
                    title: 'Projects',
                    type: 'button',
                    route: '../anappro/projects',
                    state: 'projects'
                },
                {
                    title: _this.item.name,
                    type: 'button',
                    route: '../anappro/project/' + _this.itemId + '/applications',
                    state: 'project'
                }
            ];
        });
    };
    ProjectDashboardComponent.prototype.generateBreadcrumbs = function () {
    };
    ProjectDashboardComponent.prototype.deleteItem = function () {
        // remove item from list and route to items list page
    };
    ProjectDashboardComponent.prototype.openChatSidebar = function () {
        console.log('opening');
        this.rightSidebarTitle = 'Members';
        this.drawer.open();
        this.rightDrawerContent = 'members';
    };
    ProjectDashboardComponent.prototype.openConfirmDeleteDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_anappro_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteModalComponent"], {
            disableClose: true,
            data: { title: 'Delete This Project?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result !== 'exit') {
                _this.deleteItem();
            }
        });
    };
    ProjectDashboardComponent.prototype.openEditDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_anappro_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditModalComponent"], {
            disableClose: true,
            data: {
                name: item.name,
                about: item.about,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'exit') {
                var updatedItem = {
                    name: result.name,
                    about: result.about,
                };
                _this.editItem(updatedItem);
            }
        });
    };
    ProjectDashboardComponent.prototype.editItem = function (item) {
        // edit item in list and DB
    };
    ProjectDashboardComponent.prototype.getCurrentItem = function (itemId) {
        this.item = _mock_data__WEBPACK_IMPORTED_MODULE_7__["projects"].data.filter(function (item) { return item.id === itemId; })[0];
    };
    ProjectDashboardComponent.prototype.selectBreadcrumb = function (crumb) {
        console.log(crumb);
        if (crumb.route) {
            this.router.navigate([crumb.route]);
        }
        if (crumb.state === 'project') {
            this.sideNavService.setSidenavData('currentProject', this.item);
            console.log(this.item, 'dwcewcf');
        }
        if (crumb.route) {
            this.sideNavService.setSecondarySidenavContent(crumb.state);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDashboardComponent.prototype, "drawer", void 0);
    ProjectDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'project-dashboard',
            template: __webpack_require__(/*! ./project-dashboard.component.html */ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./project-dashboard.component.scss */ "./src/app/modules/anappro/project-dashboard/project-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_6__["SideNavService"]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/users/users.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/users/users.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h-100\">\n\n  <ng-container *ngIf=\"itemUsers.length > 0\">\n    <div class=\"col-6\">\n\n      <mat-nav-list>\n        <a (click)=\"selectUser(user)\" [class.active]=\"user.id === selectedUser?.id\" mat-list-item *ngFor=\"let user of itemUsers\">\n          {{ user.name }}\n        </a>\n      </mat-nav-list>\n    </div>\n    <!-- <ul class=\"col-6\">\n      <li (click)=\"selectUser(user)\" *ngFor=\"let user of itemUsers\">{{user.name}}</li>\n    </ul> -->\n\n\n\n    <div class=\"col-6\">\n      <pre>{{selectedUser |json}}</pre>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"itemUsers.length == 0\">\n    <p>This project has no users</p>\n  </ng-container>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/users/users.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/users/users.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #d6d6d6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3Byb2plY3QtZGFzaGJvYXJkL3VzZXJzL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFuYXBwcm9cXHByb2plY3QtZGFzaGJvYXJkXFx1c2Vyc1xcdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9wcm9qZWN0LWRhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/anappro/project-dashboard/users/users.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/anappro/project-dashboard/users/users.component.ts ***!
  \****************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mock-data */ "./src/app/modules/anappro/mock-data.ts");





var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.itemUsers = [];
        this.userSelected = false;
        this.route.parent.url.subscribe(function (urlPath) {
            var url = urlPath[urlPath.length - 1].path;
            console.log(url, 'url');
            _this.itemUsers = _mock_data__WEBPACK_IMPORTED_MODULE_3__["projects"].data.filter(function (item) { return item.id === url; })[0].users;
            // console.log(this.itemUsers);
        });
        // this.getitemUsers();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getitemUsers = function () {
        var _this = this;
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                var activeUrlSegments = event.url.split('/');
                _this.activeItem = activeUrlSegments[2];
            }
        });
        setTimeout(function () {
            _this.itemUsers = _mock_data__WEBPACK_IMPORTED_MODULE_3__["projects"].data.filter(function (item) { return item.id === _this.activeItem; })[0].users;
        }, 3000);
    };
    UsersComponent.prototype.selectUser = function (user) {
        console.log(user);
        this.userSelected = true;
        this.selectedUser = user;
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/modules/anappro/project-dashboard/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/anappro/project-dashboard/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/projects/projects.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/anappro/projects/projects.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  flex-wrap mat-typography m-4\">\n  <mat-card *ngFor=\"let project of projects\" class=\"d-flex flex-column justify-content-around m-4 demo-card mat-card-flat\"\n   >\n    <mat-card-title [routerLink]=\"['../project/', project.id, 'applications']\" (click)=\"sideNavService.setSecondarySidenavContent('project')\">{{project.name}}</mat-card-title>\n    <mat-card-content class=\"text-black-50 m-0\" *ngIf=\"project.about\">{{project.about}}</mat-card-content>\n\n    <div class=\"spacer\"></div>\n    <mat-card-actions class=\"d-flex\">\n\n      <ng-container *ngIf=\"project.users\">\n          <!-- <button *ngFor=\"let user of project.users\" mat-mini-fab   >{{user.name}}</button> -->\n          <!-- <ngx-avatar name=\"{{user.name}}\"></ngx-avatar> -->\n          <ngx-avatar *ngFor=\"let user of project.users\" class=\"cursor-pointer\" [size]=\"30\" [name]=\"user.name\"></ngx-avatar>\n\n      </ng-container>\n      \n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/modules/anappro/projects/projects.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/anappro/projects/projects.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/anappro/projects/projects.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/anappro/projects/projects.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-data */ "./src/app/modules/anappro/mock-data.ts");
/* harmony import */ var _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-anappro/services/projects.service */ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts");
/* harmony import */ var _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-anappro/services/side-nav.service */ "./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts");





var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService, sideNavService) {
        this.projectsService = projectsService;
        this.sideNavService = sideNavService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        this.projects = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data;
        console.log(this.projects);
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/modules/anappro/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/modules/anappro/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _shared_anappro_services_side_nav_service__WEBPACK_IMPORTED_MODULE_4__["SideNavService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n  <h2 mat-dialog-title>{{data.title}}</h2>\n  <mat-dialog-content>\n    <p>The project along with all its properties will be deleted forever.</p>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button (click)=\"confirm()\">Confirm</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9zaGFyZWQtYW5hcHByby9jb21wb25lbnRzL2NvbmZpcm0tZGVsZXRlLW1vZGFsL2NvbmZpcm0tZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ConfirmDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteModalComponent", function() { return ConfirmDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDeleteModalComponent = /** @class */ (function () {
    function ConfirmDeleteModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDeleteModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteModalComponent.prototype.confirm = function () {
        this.dialogRef.close('confirmed');
    };
    ConfirmDeleteModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    ConfirmDeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-delete-modal',
            template: __webpack_require__(/*! ./confirm-delete-modal.component.html */ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete-modal.component.scss */ "./src/app/modules/anappro/shared-anappro/components/confirm-delete-modal/confirm-delete-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDeleteModalComponent);
    return ConfirmDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n\n  <h2 mat-dialog-title>New Project</h2>\n  <mat-dialog-content [formGroup]=\"form\">\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Name</mat-label>\n      <input matInput formControlName=\"name\">\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Description</mat-label>\n      <textarea  matInput formControlName=\"about\"></textarea>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <hr>\n\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button [disabled]=\"!form.valid\" (click)=\"save()\">Save</button>\n  </mat-dialog-actions>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coord-inputs {\n  background-color: #f3f3f3;\n  padding: 8px;\n  border-radius: 3px;\n  margin: 8px 0; }\n  .coord-inputs .mat-form-field {\n    width: 48%;\n    padding: 7px;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3NoYXJlZC1hbmFwcHJvL2NvbXBvbmVudHMvY3JlYXRlLW1vZGFsL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFuYXBwcm9cXHNoYXJlZC1hbmFwcHJvXFxjb21wb25lbnRzXFxjcmVhdGUtbW9kYWxcXGNyZWF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUpqQjtJQU9RLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuYXBwcm8vc2hhcmVkLWFuYXBwcm8vY29tcG9uZW50cy9jcmVhdGUtbW9kYWwvY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvb3JkLWlucHV0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogOHB4IDA7XG5cbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModalComponent", function() { return CreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CreateModalComponent = /** @class */ (function () {
    function CreateModalComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        // this.dialogRef.
        // this.address = data.address;
        // this.name = data.name;
        // console.log('data', data);
    }
    CreateModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            about: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
    };
    CreateModalComponent.prototype.save = function () {
        this.submitted = true;
        console.log(this.form.invalid);
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)');
        this.dialogRef.close(this.form.value);
    };
    CreateModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    CreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'create-modal',
            template: __webpack_require__(/*! ./create-modal.component.html */ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.html"),
            styles: [__webpack_require__(/*! ./create-modal.component.scss */ "./src/app/modules/anappro/shared-anappro/components/create-modal/create-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CreateModalComponent);
    return CreateModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n\n  <h2 mat-dialog-title>Edit Project : {{data.name}}</h2>\n  <mat-dialog-content [formGroup]=\"form\">\n\n    <!-- {{data|json}} -->\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Name</mat-label>\n      <input matInput formControlName=\"name\">\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Description</mat-label>\n      <textarea matInput formControlName=\"about\"></textarea>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <hr>\n\n\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button [disabled]=\"!form.valid\" (click)=\"save()\">Save</button>\n  </mat-dialog-actions>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coord-inputs {\n  background-color: #f3f3f3;\n  padding: 8px;\n  border-radius: 3px;\n  margin: 8px 0; }\n  .coord-inputs .mat-form-field {\n    width: 48%;\n    padding: 7px;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3NoYXJlZC1hbmFwcHJvL2NvbXBvbmVudHMvZWRpdC1tb2RhbC9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhbmFwcHJvXFxzaGFyZWQtYW5hcHByb1xcY29tcG9uZW50c1xcZWRpdC1tb2RhbFxcZWRpdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtFQUpqQjtJQU9RLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuYXBwcm8vc2hhcmVkLWFuYXBwcm8vY29tcG9uZW50cy9lZGl0LW1vZGFsL2VkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29vcmQtaW5wdXRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcblxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var coord_Regex = /^-?[0-9]\d*(\.\d+)?$/;
var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.about = data.about;
        this.name = data.name;
        this.formData = data;
    }
    EditModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            about: [this.about, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
    };
    EditModalComponent.prototype.save = function () {
        this.submitted = true;
        console.log(this.form.invalid);
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close(this.form.value);
    };
    EditModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    EditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-modal',
            template: __webpack_require__(/*! ./edit-modal.component.html */ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-modal.component.scss */ "./src/app/modules/anappro/shared-anappro/components/edit-modal/edit-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EditModalComponent);
    return EditModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 d-flex\">\n  <div class=\"d-flex h-100\">\n    <div class=\"primarySidenav h-100\">\n      <div class=\"h-100\">\n        <button mat-button routerLink=\"\" class=\"\">\n          <mat-icon>ac_unit</mat-icon>\n        </button>\n        <mat-list>\n          <mat-list-item>\n            <mat-icon\n              (click)=\"expandSidenav(); setSideNavState('projects'); setSecondarySidenavMenu(projectsService.getAllProjects().data)\"\n              mat-list-icon>\n              folder_special</mat-icon>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </div>\n\n    <div *ngIf=\"(sidenavExpanded$ | async)\" [class.hidden]=\"!(sidenavExpanded$ | async)\" class=\"secondarySidenav h-100\">\n      <button type=\"button\" mat-icon-button class=\"ml-auto d-block\" (click)=\"shrinkSidenav()\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n\n      <div *ngIf=\"(sidenavState$ | async) === 'application'\">\n\n        <div class=\"d-flex\">\n          <div class=\"app-avatar d-flex justify-contents-center align-items-center\">\n            <mat-icon class=\"m-auto\">code</mat-icon>\n          </div>\n          <div class=\"d-flex flex-column\" style=\"margin: 6px 0 0 0;\">\n            <span>{{currentProject$.name | async}}</span>\n\n            <span>{{currentProject$.name | async}}</span>\n\n          </div>\n        </div>\n        <!-- \n        <collapse-menu [menuItems]=\"(primarySidenavMenu$ | async)\" [activeItem]=\"activatedUrl\" (onSelect)=\"selectItem($event)\">\n        </collapse-menu> -->\n\n      </div>\n      <div *ngIf=\"(sidenavState$ | async) === 'project'\">\n        <div class=\"d-flex\">\n          <div class=\"project-avatar d-flex justify-contents-center align-items-center\">\n            <mat-icon class=\"m-auto\">folder_special</mat-icon>\n          </div>\n          <span style=\"margin: 6px;\">{{currentProject$ |async |json }}</span>\n          <span style=\"margin: 6px;\">{{currentProject$[0].name | async }}</span>\n          <span style=\"margin: 6px;\">{{sidenavState$ | async }}</span>\n\n\n        </div>\n\n\n        <!-- <search-filter-list [filteredItems]=\"filteredItems\"></search-filter-list> -->\n        <collapse-menu [menuItems]=\"(secoundarySidenavMenu$ | async)\" [activeItem]=\"activatedUrl\"\n          (onSelect)=\"selectItem($event);\"></collapse-menu>\n      </div>\n\n\n\n\n      <div *ngIf=\"(sidenavState$ | async) === 'projects'\">\n        <div class=\"d-flex justify-contents-between\">\n          <h4 mat-subheader class=\"mt-2\">Projects</h4>\n          <button class=\"create-button ml-auto\" mat-raised-button [matMenuTriggerFor]=\"createMenu\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </div>\n        <mat-menu class=\"create-menu\" #createMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"openCreateDialog()\">\n            <mat-icon>folder_special</mat-icon>\n            <span>Project</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>person_add</mat-icon>\n            <span>User</span>\n          </button>\n        </mat-menu>\n\n        <collapse-menu *ngIf=\"(secoundarySidenavMenu$ | async |json) !== '[]'\" [menuItems]=\"(secoundarySidenavMenu$ | async)\" [activeItem]=\"activatedUrl\"\n          (onSelect)=\"selectItem($event);\"></collapse-menu>\n        <!-- <tree-nav-menu [data]=\"TreeData\" (nodeSelected)=\"selectItem($event)\"></tree-nav-menu> -->\n     <div *ngIf=\"secoundarySidenavMenu$ | async as secoundarySidenavMenu\">\n       {{secoundarySidenavMenu|json}}\n     </div>\n        {{(secoundarySidenavMenu$ | async) | json}}\n        <!-- <div class=\"search-bar\">\n          <mat-form-field appearance=\"fill\" [floatLabel]=\"'never'\">\n            <input matInput type=\"text\" placeholder=\"Search Projects\" [(ngModel)]=\"searchTerm\"\n              (input)=\"search($event.target.value)\">\n            <mat-icon matPrefix>search</mat-icon>\n            <button class=\"input-clear-button\" mat-button *ngIf=\"searchTerm\" matSuffix mat-icon-button\n              aria-label=\"Clear\" (click)=\"clearSearch()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n        <mat-nav-list dense>\n          <a [class.active]=\"activeNav == item.id\" mat-list-item *ngFor=\"let item of filteredItems\"\n            (click)=\"selectItem(item) \">\n            {{ item.name }}\n          </a>\n        </mat-nav-list> -->\n      </div>\n\n\n    </div>\n  </div>\n\n  <div (click)=\"expandSidenav()\" *ngIf=\"!(sidenavExpanded$ | async)\" class=\"h-100\"\n    style=\"width:10px;background-color: black\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggleRight {\n  background-color: #f5f5f5;\n  height: 20px; }\n  .toggleRight button {\n    margin-bottom: -21px; }\n  .active {\n  background: #e6e6e6; }\n  .search-bar mat-form-field {\n  width: 250px; }\n  .search-bar .mat-form-field-infix {\n  border: none !important; }\n  .search-bar .input-clear-button {\n  margin: 0 0 0 -25px; }\n  .create-button {\n  margin: 16px auto !important;\n  display: block; }\n  .mat-menu mat-menu-content {\n  width: 200px; }\n  ul,\nli {\n  list-style-type: none;\n  margin: 0; }\n  .mat-tree-node {\n  display: unset; }\n  .mat-icon-button {\n  width: unset;\n  height: unset;\n  line-height: unset; }\n  .primarySidenav {\n  background-color: aqua;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3NoYXJlZC1hbmFwcHJvL2NvbXBvbmVudHMvc2lkZS1uYXYvQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcYW5hcHByb1xcc2hhcmVkLWFuYXBwcm9cXGNvbXBvbmVudHNcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7RUFGZDtJQUtJLG9CQUFvQixFQUFBO0VBSXhCO0VBQ0UsbUJBQW1CLEVBQUE7RUFLckI7RUFLSSxZQUFZLEVBQUE7RUFMaEI7RUFRSSx1QkFBdUIsRUFBQTtFQVIzQjtFQVdJLG1CQUFtQixFQUFBO0VBT3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWMsRUFBQTtFQUVmO0VBRUMsWUFBVyxFQUFBO0VBSWI7O0VBRUUscUJBQXFCO0VBQ3JCLFNBQVMsRUFBQTtFQUdYO0VBQ0UsY0FBYyxFQUFBO0VBR2hCO0VBQ0ksWUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtFQUd0QjtFQUNBLHNCQUFzQjtFQUN0QixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FuYXBwcm8vc2hhcmVkLWFuYXBwcm8vY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2lkZW5hdiB7XHJcbiAgXHJcbn1cclxuLnRvZ2dsZVJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGhlaWdodDogMjBweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5cclxuXHJcblxyXG4uc2VhcmNoLWJhciB7XHJcblxyXG4gIC8vIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbnB1dC1jbGVhci1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAtMjVweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4uY3JlYXRlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gLm1hdC1tZW51IG1hdC1tZW51LWNvbnRlbnQgXHJcbiAge1xyXG4gIHdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG5cclxudWwsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWF0LXRyZWUtbm9kZSB7XHJcbiAgZGlzcGxheTogdW5zZXQ7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6ICB1bnNldDtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbn1cclxuXHJcbi5wcmltYXJ5U2lkZW5hdiB7XHJcbmJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbmhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5cclxuLy8gbWF0LXNpZGVuYXYge1xyXG4vLyAgIHdpZHRoOiAyNjBweDtcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_side_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/side-nav.service */ "./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/modules/anappro/shared-anappro/store/index.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts");






var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(store, projectsService, sideNavService) {
        this.store = store;
        this.projectsService = projectsService;
        this.sideNavService = sideNavService;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        // this.sideNavState = this.sideNavService.sideNavState;
        // this.currentState = this.sideNavService.currentState;
        // this.data = this.sideNavService.sidenavData;
        var _this = this;
        //layout state selectors , TODO create admin container and move layout there
        // this.layoutState$ = this.store.select<any>(fromRoot.getLayoutState);
        // this.rightExpanded$ = this.store.select<boolean>(fromRoot.getRightExpanded);
        // this.showRight$ = this.store.select<boolean>(fromRoot.getShowRight);
        // this.leftExpanded$ = this.store.select<boolean>(fromRoot.getLeftExpanded);
        // this.showLeft$ = this.store.select<boolean>(fromRoot.getShowLeft);
        // this.centerExpanded$ = this.store.select<boolean>(fromRoot.getCenterExpanded);
        // this.showCenter$ = this.store.select<boolean>(fromRoot.getShowCenter);
        // this.rightContent$ = this.store.select<string>(fromRoot.getRightContent);
        this.appPageState$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getAppPageState"]);
        this.currentProject$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getCurrentProject"]);
        this.currentApplication$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getCurrentApplication"]);
        this.sidenavExpanded$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getSidenavExpanded"]);
        this.sidenavState$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getSidenavState"]);
        this.primarySidenavMenu$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getPrimarySidenavMenu"]);
        this.secondarySidenavMenu$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_4__["getSecondarySidenavMenu"]);
        // this.store.select<any>(fromRoot.getSecondarySidenavMenu).subscribe(data => this.secondarySidenavMenu$ = data)
        this.secondarySidenavMenu$.subscribe(function (data) { return _this.secondarySidenavMenu$ = data; });
        // console.log(this.sideNavState, 'sideNavState');
        // console.log(this.currentState, 'currentState');
    };
    SideNavComponent.prototype.selectItem = function (item) {
        console.log(item);
    };
    SideNavComponent.prototype.openCreateDialog = function () {
    };
    SideNavComponent.prototype.shrinkSidenav = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__["ShrinkSideNav"]());
    };
    SideNavComponent.prototype.expandSidenav = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__["ExpandSideNav"]());
    };
    SideNavComponent.prototype.setSideNavState = function (state) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__["SetSideNavState"](state));
    };
    SideNavComponent.prototype.setSecondarySidenavMenu = function (menu) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_4__["SetSecondaryMenu"](menu));
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/modules/anappro/shared-anappro/components/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"],
            _services_side_nav_service__WEBPACK_IMPORTED_MODULE_2__["SideNavService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n\n\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\" (click)=\"selectNode(node)\">\n      <!-- use a disabled button to provide padding for tree leaf -->\n      <button mat-icon-button disabled></button>\n      <mat-icon *ngIf='node.iconname'>{{node.iconname}}</mat-icon>\n      {{node.name}}\n    </li>\n  </mat-tree-node>\n\n  \n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n    <li>\n      <div class=\"mat-tree-node\" (click)=\"selectNode(node)\">\n        <mat-icon matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\" class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n        <mat-icon *ngIf='node.iconname'>{{node.iconname}}</mat-icon>\n        {{node.name}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none; }\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n  padding: 0 8px; }\n\nul,\nli {\n  list-style-type: none;\n  margin: 0; }\n\n.mat-icon-button {\n  width: unset;\n  height: unset;\n  line-height: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3NoYXJlZC1hbmFwcHJvL2NvbXBvbmVudHMvdHJlZS1uYXYtbWVudS9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhbmFwcHJvXFxzaGFyZWQtYW5hcHByb1xcY29tcG9uZW50c1xcdHJlZS1uYXYtbWVudVxcdHJlZS1uYXYtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCOztFQUVBLHFCQUFxQjtFQUNyQixTQUFTLEVBQUE7O0FBT1g7RUFDSSxZQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbmFwcHJvL3NoYXJlZC1hbmFwcHJvL2NvbXBvbmVudHMvdHJlZS1uYXYtbWVudS90cmVlLW5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdHJlZS1pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtdHJlZSB1bCxcclxuICAuZXhhbXBsZS10cmVlIGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG5cclxuICB1bCxcclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8vIC5tYXQtdHJlZS1ub2RlIHtcclxuLy8gICBkaXNwbGF5OiB1bnNldDtcclxuLy8gfVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogIHVuc2V0O1xyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TreeNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNavMenuComponent", function() { return TreeNavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");




var TREE_DATA = [
    {
        name: 'Projects',
        iconname: 'folder_special',
        children: [
            {
                name: 'Anappro',
                children: [
                    { name: 'IDE' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Bioreader',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
    {
        name: 'Users',
        iconname: 'people_outline',
        children: [
            { name: 'Mike Ike' },
            { name: 'Omar Badaoui' },
            { name: 'john doe' },
        ]
    },
];
var TreeNavMenuComponent = /** @class */ (function () {
    function TreeNavMenuComponent() {
        // this.dataSource.data = this.nestedDataSource;
        // this.dataSource.data = TREE_DATA;
        // this.dataSource.data = this.data;
        // console.log(this.data);
        this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) { return node.children; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNestedDataSource"]();
        // hasChild = (_: number, node: TreeData) => !!node.children && node.children.length > 0;
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        // console.log(this.nestedDataSource, 'nestedDataSource')
        // console.log()
        // console.log()
    }
    TreeNavMenuComponent.prototype.ngOnInit = function () {
        this.dataSource.data = this.data;
        console.log(this.data);
    };
    TreeNavMenuComponent.prototype.selectNode = function (node) {
        console.log(node);
        this.nodeSelected.emit(node);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeNavMenuComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeNavMenuComponent.prototype, "nodeSelected", void 0);
    TreeNavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'tree-nav-menu',
            template: __webpack_require__(/*! ./tree-nav-menu.component.html */ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./tree-nav-menu.component.scss */ "./src/app/modules/anappro/shared-anappro/components/tree-nav-menu/tree-nav-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeNavMenuComponent);
    return TreeNavMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/services/side-nav.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SideNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavService", function() { return SideNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavService = /** @class */ (function () {
    function SideNavService() {
        this.secondarySidenavOpen = true;
        // public sidenavData =  new BehaviorSubject<any>([]);
        this.sidenavData = [];
        // set sidenav default data
        this.secondarySidenavOpen = true;
        this.secondarySidenavContent = 'projects';
    }
    SideNavService.prototype.setState = function (property, value) {
        this.sideNavState[property] = value;
    };
    SideNavService.prototype.setCurrentState = function (state) {
        this.currentState = state;
    };
    SideNavService.prototype.setSidenavData = function (property, value) {
        console.log('0000000', property, value);
        this.sidenavData[property] = value;
        console.log(this.sidenavData);
    };
    SideNavService.prototype.setSecondarySidenavOpen = function (value) {
        this.secondarySidenavOpen = value;
    };
    SideNavService.prototype.setSecondarySidenavContent = function (value) {
        this.secondarySidenavContent = value;
    };
    SideNavService.prototype.setPrimarySidenavMenuItems = function (value) {
        this.primarySidenavMenuItems = value;
    };
    SideNavService.prototype.setSecondarySidenavMenuItems = function (value) {
        this.secondarySidenavMenuItems = value;
    };
    SideNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavService);
    return SideNavService;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/actions/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/actions/index.ts ***!
  \***********************************************************************/
/*! exports provided: EXPAND_RIGHT, SHRINK_RIGHT, CLOSE_RIGHT, ExpandRight, ShrinkRight, CloseRight, EXPAND_LEFT, SHRINK_LEFT, CLOSE_LEFT, ExpandLeft, ShrinkLeft, CloseLeft, RIGHT_CONTENT, RightContent, EXPAND_SIDENAV, SHRINK_SIDENAV, SET_SECONDARY_MENU, SET_PRIMARY_MENU, SET_SIDENAV_STATE, ExpandSideNav, ShrinkSideNav, SetSideNavState, SetSecondaryMenu, SetPrimaryMenu, SET_APP_PAGE_STATE, SET_CURRENT_PROJECT, SET_CURRENT_APPLICATION, SetAppPageState, SetCurrentProject, SetCurrentApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.action */ "./src/app/modules/anappro/shared-anappro/store/actions/layout.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_RIGHT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["EXPAND_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_RIGHT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["SHRINK_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_RIGHT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["CLOSE_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandRight", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["ExpandRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkRight", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["ShrinkRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseRight", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["CloseRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_LEFT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["EXPAND_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_LEFT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["SHRINK_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_LEFT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["CLOSE_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandLeft", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["ExpandLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkLeft", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["ShrinkLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseLeft", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["CloseLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RIGHT_CONTENT", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["RIGHT_CONTENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightContent", function() { return _layout_action__WEBPACK_IMPORTED_MODULE_0__["RightContent"]; });

/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/modules/anappro/shared-anappro/store/actions/app.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_SIDENAV", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["EXPAND_SIDENAV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_SIDENAV", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SHRINK_SIDENAV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SECONDARY_MENU", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_SECONDARY_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_PRIMARY_MENU", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_PRIMARY_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SIDENAV_STATE", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_SIDENAV_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandSideNav", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["ExpandSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkSideNav", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["ShrinkSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSideNavState", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetSideNavState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSecondaryMenu", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetSecondaryMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPrimaryMenu", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetPrimaryMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_APP_PAGE_STATE", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_APP_PAGE_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PROJECT", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_PROJECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_APPLICATION", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_APPLICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAppPageState", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetAppPageState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentProject", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetCurrentProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentApplication", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SetCurrentApplication"]; });

// export * from './router.actions';




/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/index.ts ***!
  \***************************************************************/
/*! exports provided: reducers, EXPAND_RIGHT, SHRINK_RIGHT, CLOSE_RIGHT, ExpandRight, ShrinkRight, CloseRight, EXPAND_LEFT, SHRINK_LEFT, CLOSE_LEFT, ExpandLeft, ShrinkLeft, CloseLeft, RIGHT_CONTENT, RightContent, EXPAND_SIDENAV, SHRINK_SIDENAV, SET_SECONDARY_MENU, SET_PRIMARY_MENU, SET_SIDENAV_STATE, ExpandSideNav, ShrinkSideNav, SetSideNavState, SetSecondaryMenu, SetPrimaryMenu, SET_APP_PAGE_STATE, SET_CURRENT_PROJECT, SET_CURRENT_APPLICATION, SetAppPageState, SetCurrentProject, SetCurrentApplication, getLayoutState, getRightExpanded, getCenterExpanded, getShowRight, getShowLeft, getLeftExpanded, getShowCenter, getRightContent, getAppState, getAppPageState, getCurrentProject, getCurrentApplication, getSidenavExpanded, getSidenavState, getPrimarySidenavMenu, getSecondarySidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/modules/anappro/shared-anappro/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/modules/anappro/shared-anappro/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_RIGHT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EXPAND_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_RIGHT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SHRINK_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_RIGHT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandRight", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ExpandRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkRight", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ShrinkRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseRight", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CloseRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_LEFT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EXPAND_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_LEFT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SHRINK_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSE_LEFT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandLeft", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ExpandLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkLeft", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ShrinkLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseLeft", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CloseLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RIGHT_CONTENT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["RIGHT_CONTENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightContent", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["RightContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPAND_SIDENAV", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["EXPAND_SIDENAV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHRINK_SIDENAV", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SHRINK_SIDENAV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SECONDARY_MENU", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_SECONDARY_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_PRIMARY_MENU", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_PRIMARY_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_SIDENAV_STATE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_SIDENAV_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandSideNav", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ExpandSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShrinkSideNav", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ShrinkSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSideNavState", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetSideNavState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSecondaryMenu", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetSecondaryMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetPrimaryMenu", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetPrimaryMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_APP_PAGE_STATE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_APP_PAGE_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PROJECT", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_PROJECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_APPLICATION", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_APPLICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetAppPageState", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetAppPageState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentProject", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetCurrentProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetCurrentApplication", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SetCurrentApplication"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/modules/anappro/shared-anappro/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayoutState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLayoutState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRightExpanded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getRightExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCenterExpanded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getCenterExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowRight", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getShowRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowLeft", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getShowLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLeftExpanded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLeftExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowCenter", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getShowCenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRightContent", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getRightContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppPageState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getAppPageState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentProject", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentApplication", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentApplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidenavExpanded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSidenavExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidenavState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSidenavState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrimarySidenavMenu", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getPrimarySidenavMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSecondarySidenavMenu", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSecondarySidenavMenu"]; });



// export * from './effects';



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/reducers/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/reducers/index.ts ***!
  \************************************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.reducer */ "./src/app/modules/anappro/shared-anappro/store/reducers/app.reducer.ts");

var reducers = {
    // routerReducer: fromRouter.routerReducer,
    // layout: fromLayout.reducer,
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};
// export const getRouterState = createFeatureSelector<
// // fromRouter.RouterReducerState<RouterStateUrl>
// >('routerReducer'); 
// export class CustomSerializer
// implements fromRouter.RouterStateSerializer<RouterStateUrl> {
//     serialize( routerState: RouterStateSnapshot): RouterStateUrl {
//         const {url} = routerState;
//         const {queryParams} = routerState.root;
//         let state:ActivatedRouteSnapshot = routerState.root;
//         while(state.firstChild) {
//             state = state.firstChild;
//         }
//         const {params} = state;
//         return {url , queryParams , params};
//     }
// }


/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/selectors/app.selectors.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/selectors/app.selectors.ts ***!
  \*********************************************************************************/
/*! exports provided: getAppState, getAppPageState, getCurrentProject, getCurrentApplication, getSidenavExpanded, getSidenavState, getPrimarySidenavMenu, getSecondarySidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppPageState", function() { return getAppPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProject", function() { return getCurrentProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentApplication", function() { return getCurrentApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidenavExpanded", function() { return getSidenavExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidenavState", function() { return getSidenavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimarySidenavMenu", function() { return getPrimarySidenavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondarySidenavMenu", function() { return getSecondarySidenavMenu; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/app.reducer */ "./src/app/modules/anappro/shared-anappro/store/reducers/app.reducer.ts");


var getAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getAppState"], function (state) { return state; });
var getAppPageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getAppPageState"]);
var getCurrentProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getCurrentProject"]);
var getCurrentApplication = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getCurrentApplication"]);
var getSidenavExpanded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getSidenavExpanded"]);
var getSidenavState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getSidenavState"]);
var getPrimarySidenavMenu = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getPrimarySidenavMenu"]);
var getSecondarySidenavMenu = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getSecondarySidenavMenu"]);


/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/selectors/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/selectors/index.ts ***!
  \*************************************************************************/
/*! exports provided: getLayoutState, getRightExpanded, getCenterExpanded, getShowRight, getShowLeft, getLeftExpanded, getShowCenter, getRightContent, getAppState, getAppPageState, getCurrentProject, getCurrentApplication, getSidenavExpanded, getSidenavState, getPrimarySidenavMenu, getSecondarySidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.selectors */ "./src/app/modules/anappro/shared-anappro/store/selectors/layout.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayoutState", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getLayoutState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRightExpanded", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getRightExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCenterExpanded", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getCenterExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowRight", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getShowRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowLeft", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getShowLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLeftExpanded", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getLeftExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowCenter", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getShowCenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRightContent", function() { return _layout_selectors__WEBPACK_IMPORTED_MODULE_0__["getRightContent"]; });

/* harmony import */ var _app_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.selectors */ "./src/app/modules/anappro/shared-anappro/store/selectors/app.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppPageState", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getAppPageState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentProject", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getCurrentProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentApplication", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getCurrentApplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidenavExpanded", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getSidenavExpanded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidenavState", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getSidenavState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrimarySidenavMenu", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getPrimarySidenavMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSecondarySidenavMenu", function() { return _app_selectors__WEBPACK_IMPORTED_MODULE_1__["getSecondarySidenavMenu"]; });





/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/selectors/layout.selectors.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/selectors/layout.selectors.ts ***!
  \************************************************************************************/
/*! exports provided: getLayoutState, getRightExpanded, getCenterExpanded, getShowRight, getShowLeft, getLeftExpanded, getShowCenter, getRightContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutState", function() { return getLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightExpanded", function() { return getRightExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExpanded", function() { return getCenterExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowRight", function() { return getShowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowLeft", function() { return getShowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeftExpanded", function() { return getLeftExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowCenter", function() { return getShowCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightContent", function() { return getRightContent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/layout.reducer */ "./src/app/modules/anappro/shared-anappro/store/reducers/layout.reducer.ts");

//import * as fromRoot from '../../store'
//import * as fromFeature from '../reducers';

var getLayoutState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getLayoutState"], function (state) { return state; });
var getRightExpanded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getRightExpanded"]);
var getCenterExpanded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getCenterExpanded"]);
var getShowRight = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getShowRight"]);
var getShowLeft = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getShowLeft"]);
var getLeftExpanded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getLeftExpanded"]);
var getShowCenter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getShowCenter"]);
var getRightContent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getRightContent"]);


/***/ })

}]);
//# sourceMappingURL=modules-anappro-master-module.js.map
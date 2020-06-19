<?php
/**
 * @name        Directory Carousel
 * @copyright	Copyright (C) 2020 All rights reserved
 * @license		GPLv3 or later; see https://github.com/TVBZ/mod_directorycarousel/blob/master/LICENSE
 * @author		Tom F. Vanbrabant, a.k.a. TVBZ
 * 
 * https://github.com/TVBZ/mod_directorycarousel
 * 
 **/

// Restrict direct access
defined("_JEXEC") or die;

use \Joomla\CMS\Factory;
use \Joomla\CMS\Uri\Uri;

$document = Factory::getDocument();

$document->addStyleSheet(Uri::root(true)."/modules/mod_directorycarousel/assets/css/owl.carousel.min.css");
$document->addStyleSheet(Uri::root(true)."/modules/mod_directorycarousel/assets/css/owl.theme.default.min.css");

$document->addScript(Uri::root(true)."/modules/mod_directorycarousel/assets/js/owl.carousel.min.js","text/javascript", true, false);
$document->addScript(Uri::root(true)."/modules/mod_directorycarousel/assets/js/init.carousel.js","text/javascript", true, false);

?>

<div id="owl-carousel-<?php echo $module->id; ?>" class="owl-carousel owl-theme">
    <?php foreach ($images as $image) : ?>
        <img class="owl-img-<?php echo $image["id"]; ?>" alt="<?php echo $image["alt"]; ?>" src="<?php echo $image["src"]; ?>"/>
    <?php endforeach; ?>
</div>

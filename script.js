const paragraphs = [
    "Sunlight stretches beyond towering summits revealing golden meadows whispering breezes carry distant echoes weaving unseen patterns across endless horizons ancient structures crumble beneath endless time revealing lost civilizations buried beneath shifting sands restless tides crash against rugged coastlines shaping intricate formations upon resilient cliffs wandering travelers navigate dense woodlands seeking hidden sanctuaries where forgotten knowledge lingers among twisted roots luminous fireflies dance across moonlit glades illuminating pathways through enchanted realms drifting clouds obscure distant peaks concealing celestial wonders from curious gazes shimmering reflections ripple across crystal",
  
    "Stormy tempests ravage unyielding landscapes reshaping contours carved through generations resilient forests sway beneath howling gusts whispering age-old tales through trembling leaves forgotten pathways twist between moss-covered ruins leading toward mysteries lost within boundless time distant thunder rumbles across shadowed valleys signaling celestial unrest beyond mortal comprehension cascading torrents carve labyrinthine trenches through fertile plains nourishing emerald pastures under watchful starlit heavens spectral visions drift across twilight horizons weaving endless stories through intangible whispers unseen forces guide wandering souls beyond mortal thresholds where ancient wisdom lingers",
  
    "Verdant canopies shelter hidden sanctuaries concealing ancient relics untouched by time crystalline streams weave intricate patterns between moss-laden stones whispering forgotten stories to those who listen radiant sunbeams pierce emerald foliage dappling shadows upon undisturbed soil meandering footpaths wind between towering sentinels carved by elemental hands twilight shrouds distant landscapes in ethereal hues merging dreams with reality spectral echoes weave through midnight breezes unraveling cosmic secrets lost within infinity distant lanterns flicker across boundless horizons guiding travelers beyond mortal constraints celestial patterns shift above silent realms revealing destinies written within",
  
    "Midnight specters drift across endless dunes tracing unseen pathways toward forgotten kingdoms buried beneath shifting sands flickering lanterns sway against howling tempests whispering secrets long concealed within ancient tombs crystalline formations shimmer beneath subterranean caverns illuminating labyrinthine corridors with ethereal radiance wanderers tread carefully upon fractured earth deciphering cryptic etchings carved into timeworn walls cascading rivers roar through uncharted territories carving majestic canyons between towering monoliths restless shadows dance across spectral corridors echoing distant memories lost within eternity cosmic tides pull celestial bodies into unseen alignments shaping",
  
    "Roaring waterfalls plunge into hidden depths sculpting caverns beneath unyielding stone luminescent fungi pulse within subterranean labyrinths casting ghostly glows upon forgotten relics whispering breezes carry haunting melodies through crumbling corridors where shadows flicker between fractured pillars ancient scrolls lie undisturbed upon dust-laden pedestals inscribed with cryptic passages revealing knowledge beyond comprehension distant echoes reverberate through twilight landscapes merging past with present celestial bodies wane within boundless voids casting fleeting luminescence upon silent waters shifting constellations map unseen frontiers charting courses beyond mortal perception",
  
    "Towering cliffs loom over mist-laden valleys concealing hidden pathways carved through forgotten epochs spectral auroras weave across twilight skies igniting celestial fires beyond mortal understanding distant echoes resonate across desolate landscapes whispering legends etched into fractured bedrock wandering souls drift across endless plains searching for sanctuaries lost within boundless time crystalline cascades descend from unseen heights sculpting labyrinthine waterways between weathered stones shifting sands conceal remnants of forgotten civilizations buried beneath relentless tides distant constellations pulse within cosmic silence illuminating journeys beyond earthly confines",
  
    "Golden embers glow within midnight pyres crackling with echoes of ancient incantations spectral figures drift through shadowed archways whispering secrets carried by endless winds distant peaks pierce starlit heavens framing celestial visions within frozen horizons cascading streams etch intricate pathways between towering cedars where luminous spores illuminate forested realms wandering travelers decipher cryptic symbols hidden among fractured ruins revealing untold sagas woven into timeworn foundations spectral horizons stretch beyond mortal comprehension mapping celestial currents upon unseen frontiers unseen forces shift within twilight corridors weaving destinies upon cosmic tapestries",
  
    "Shrouded summits loom beyond spectral clouds concealing forgotten shrines built upon celestial ley lines ancient echoes stir within wind-laden corridors unraveling secrets held by silent sentinels towering monoliths guard hidden sanctuaries veiled within emerald labyrinths undying flames flicker upon eternal altars whispering cosmic revelations across boundless voids cascading torrents erode earthen bastions sculpting landscapes beyond mortal recognition drifting apparitions weave between moonlit spires tracing memories lost within infinity spectral harmonies vibrate through boundless horizons entwining melodies woven into timeless existence celestial patterns shift within unseen realms guiding wanderers",
  
    "Frozen tundras stretch beyond sight concealing relics encased within crystalline catacombs luminescent reflections ripple beneath frozen surfaces revealing glimpses of forgotten legacies wandering seekers traverse endless corridors deciphering ancient glyphs carved into immortal ice storm-laden gusts howl across spectral wastelands echoing through abandoned citadels submerged beneath shifting permafrost distant auroras dance above fractured landscapes painting iridescent hues upon boundless expanses silent watchtowers stand against unrelenting elements preserving echoes of civilizations lost within infinite time celestial embers burn within cosmic horizons signaling dawns beyond earthly perception",
  
    "Silent echoes drift through moonlit ruins whispering forgotten names across shattered thoroughfares spectral figures move between crumbling archways tracing steps lost within ancient corridors luminous tides swell against weathered shores shaping landscapes beyond mortal comprehension wandering travelers cross endless plains deciphering inscriptions etched within resilient bedrock twilight veils distant realms obscuring celestial visions woven into cosmic designs shifting constellations illuminate unseen pathways guiding souls beyond fleeting existence windswept embers glow within shadowed sanctuaries revealing remnants of destinies carved into unyielding stone cosmic harmonies resonate across boundless"

];


const restartButton = document.querySelector(".restart-button")
const text = document.querySelector(".inner-text")
const inputField = document.querySelector(".input-field")
const mistakeValue = document.querySelector(".mistake-value")
const timerdiv = document.querySelector(".timer")
const wpmValue = document.querySelector(".wpm-value")
const cpmValue = document.querySelector(".cpm-value")
const accuracyValue = document.querySelector(".accuracy")
const heading = document.querySelector(".heading")


let charIndex = cpm = wpm = mistake = accuracy = 0, isTyping = false, timeLeft = 60, timer






restartButton.addEventListener("click", resetGame)

function changeParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length)
    text.innerHTML = ""
    paragraphs[randIndex].split("").forEach(letter => {
        const spanTag = `<span>${letter}</span>`
        text.innerHTML += spanTag
    })
    text.querySelectorAll("span")[0].classList.add("underline")
    
    document.addEventListener("keydown", () => inputField.focus())
    text.addEventListener("click", () => inputField.focus())

}

changeParagraph()


inputField.addEventListener("input", typing)

function typing() {
    const letters = text.querySelectorAll("span")
    const letter = letters[charIndex]
    const typedChar = inputField.value.split("")[charIndex]


    if (charIndex < letters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(() => {
                console.log("running")
                if (timeLeft > 0) {
                    timeLeft--
                    timerdiv.innerText = `${timeLeft}s`
                } else {
                    heading.style = `color: #FBA518; text-shadow: 0 0 5px #2D336B;`
                    clearInterval(timer)
                }
                
        
            }, 1000);
            isTyping = true
        }
        
        
        if (typedChar == null) {
            charIndex--
            if (letters[charIndex].classList.contains("red")) {
                mistake--
                mistakeValue.innerText = mistake
            }
            letters[charIndex].classList.remove("green", "red")
            addUnderline(letters)
            return
            
        } else{
            if (letter.innerText === typedChar) {
                letter.classList.add("green")
            } else {
                mistake++
                letter.classList.add("red")
            }
        }
    
        charIndex++
        addUnderline(letters)
        mistakeValue.innerText = mistake
    
        cpm = charIndex - mistake
        cpmValue.innerText = cpm
    
        wpm = Math.round(((cpm / 8) / (60 - timeLeft)) * 60)
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm
        wpmValue.innerText = wpm

        accuracy = Math.round((cpm / (cpm + mistake) ) * 100)
        accuracyValue.innerText = `${accuracy}%`

    } else{
        inputField.value = ""
        clearInterval(timer)
    }


}

function addUnderline(letters) {
    letters.forEach(letter => letter.classList.remove("underline"))
    letters[charIndex].classList.add("underline")
}

function resetGame() {
    loading()
    inputField.value = ""
    clearInterval(timer)
    timeLeft = 60
    timerdiv.innerText = "60s"
    cpmValue.innerText = 0
    wpmValue.innerText = 0
    mistakeValue.innerText = 0
    charIndex = cpm = wpm = mistake = 0, isTyping = false
    accuracy = 100
    accuracyValue.innerText = `${accuracy}%`
    heading.style = `color: #44475A; text-shadow: 0 0 5px #FEEC37;`
}

function loading() {
    text.innerHTML = "Loading..."
    setTimeout(() => {
        changeParagraph()
    }, 100);
}
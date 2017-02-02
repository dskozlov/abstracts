# ПРОПИСАТЬ В ~/.bash_profile
# задействуем команды из ~/.bashrc при запуске новой сессии
if [ -f ~/.bashrc ]; then
  source ~/.bashrc
fi


# /usr/local/bin и /usr/local/sbin должны быть в начале
export PATH="/usr/local/bin:/usr/local/sbin:$PATH"

export LESS='-M' # задание параметров для команды less
export EDITOR='subl -w' # редактор по умолчанию — Sublime Text
# история
export HISTSIZE=10000
export HISTFILESIZE=1000000
export HISTTIMEFORMAT='%b %d %I:%M %p '
export HISTCONTROL=ignoreboth # ignoredups:ignorespace
export HISTIGNORE="history:pwd:exit:df:ls:ls -la:ll"
# поиск
export GREP_COLOR="34;47"
# Аттрибуты      Цвет текста    Цвет фона
# 0 сбросить     30 чёрный      40 чёрный
# 1 яркий        31 красный     41 красный
# 2 тусклый      32 зелёный     42 зелёный
# 4 подчеркнуть  33 жёлтый      43 жёлтый
# 5 мигать       34 синий       44 синий
# 7 обратный     35 фиолетовый  45 фиолетовый
# 8 спрятать     36 голубой     46 голубой
#                37 белый       47 белый
export GREP_OPTOPNS="--color=auto" # раскрашивание по умолчанию

# полезные сокращения
alias ll='ls -lahG'
alias home='cd ~'
alias up='cd ..'
alias h='history'
# проги
alias mc="/usr/local/Cellar/midnight-commander/4.8.17/libexec/mc/mc-wrapper.sh"

# переопределение старых команд
alias mv='mv -i'
alias cp='cp -i'
alias rm='rm -i'
alias df='df -h'
alias du='du -h'
alias mkdir='mkdir -p'

# фишки для macOS
alias pbsort='pbpaste | sort | pbcopy' # сортировать то, что в буфере обмена

# экспериментальные команды
alias bs='subl ~/.bashrc' # настройки Bash


# echo -n "Hello, "; whoami

# git
# автозаполнение — https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
# папка(ветка)>

if [ ! -f ~/.bash_git ]; then
  curl -L https://raw.github.com/git/git/master/contrib/completion/git-prompt.sh > ~/.bash_git
fi
source ~/.bash_git
export PS1='\W$(__git_ps1 "(%s)")> '
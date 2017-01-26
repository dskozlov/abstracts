# открытие документов с помощью Sublime Text командой subl
# http://stackoverflow.com/questions/16199581/opening-sublime-text-on-command-line-as-subl-on-mac-os
export PATH=/bin:/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin:$PATH
export EDITOR='subl -w'

# автозаполнение в Git
# https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion

  ## Отображение ветки (Git) и рабочей папки
  export PS1='\W$(__git_ps1 "(%s)")> '
fi



# # export NVM_DIR="/Users/iGor/.nvm"
# # [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# # export PATH="/opt/local/bin:/opt/local/sbin:$PATH"

# # # для сервера UCHi.RU
# # export PATH="$HOME/.rbenv/bin:$PATH"
# # eval "$(rbenv init -)"

# # открытие документов с помощью Sublime Text командой subl
# export PATH=/bin:/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin:$PATH
# export EDITOR='subl -w'

# # автозаполнение в Git
# if [ -f ~/.git-completion.bash ]; then
#   source ~/.git-completion.bash
# fi

# # # Для установки RVM
# # export PATH="/usr/local/bin:$PATH"

# # [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

# # alias mc="/usr/local/Cellar/midnight-commander/4.8.17/libexec/mc/mc-wrapper.sh"

# source ~/.bash_git

# ## Отображение ветки (Git) и рабочей папки
# export PS1='\W$(__git_ps1 "(%s)")> '

# source ~/.profile
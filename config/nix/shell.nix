# if this file is edited using VS Code in windows, it might be necessary to 
# remove the \r characters:
# 
# sed -i 's/\r$//' config/nix/shell.nix
#

{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-18_x
  ];

  shellHook = ''
    # Mark variables which are modified or created for export.
    set -a
    #source env.sh
    # or to make it relative to the directory of this shell.nix file
    source ${toString ../env.sh}
    set +a
    alias npm="echo npm is not available in this shell. Use pnpm instead."

  '';

}
